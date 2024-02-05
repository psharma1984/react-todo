function generateAPIUrl(baseId, tableName) {
  return `https://api.airtable.com/v0/${baseId}/${tableName}`;
}

async function fetchTodosFromAPI(selectedList, sortOrder) {
  const options = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}` }
  };
  //console.log(selectedList)
  const url = generateAPIUrl(process.env.REACT_APP_AIRTABLE_BASE_ID, selectedList);
  //console.log(url)
  try {
    const response = await fetch(url, options);
    console.log(response)
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json()

    const todos = data.records.map((todo) => ({
      id: todo.id,
      title: todo.fields.title,
      completed: todo.fields.completed,
    }));

    const sortedTodos = todos.sort((objectA, objectB) => {
      const titleA = objectA.title.toLowerCase();
      const titleB = objectB.title.toLowerCase();

      const comparison = sortOrder === 'asc' ? 1 : -1;

      if (titleA < titleB) {
        return comparison;
      } else if (titleA > titleB) {
        return -comparison;
      } else {
        return 0;
      }
    })
    return sortedTodos;
  }
  catch (err) {
    console.log(err.message)
    return [];
  }
}


async function postNewTodoToAPI(newTodo, selectedList) {
  try {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({ fields: { title: newTodo.title } }),
    };
    const url = generateAPIUrl(process.env.REACT_APP_AIRTABLE_BASE_ID, selectedList);

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error:${response.status}`)
    }

    const newData = await response.json()
    return { id: newData.id, title: newData.fields.title };
  } catch (err) {
    console.log(err.message)
    return null;
  }
}

const deleteTodoFromAPI = async (id, selectedList) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      }
    };
    const url = generateAPIUrl(process.env.REACT_APP_AIRTABLE_BASE_ID, selectedList);
    const response = await fetch(`${url}/${id}`, options)

    if (!response.ok) {
      throw new Error(`Error:${response.status}`)
    }
    else {
      return response.status;
    }
  } catch (err) {
    console.log(err.message)
    return null;
  }
}

const updateTodoFromAPI = async (id, newCompleted, selectedList) => {
  try {
    const options = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({ fields: { completed: newCompleted } }),
    }
    const url = generateAPIUrl(process.env.REACT_APP_AIRTABLE_BASE_ID, selectedList);
    const response = await fetch(`${url}/${id}`, options)

    if (!response.ok) {
      throw new Error(`Error:${response.status}`)
    }
    else {
      return response.json();
    }
  } catch (err) {
    console.log(err.message)
    return null;
  }
}

export { fetchTodosFromAPI, postNewTodoToAPI, deleteTodoFromAPI, updateTodoFromAPI };