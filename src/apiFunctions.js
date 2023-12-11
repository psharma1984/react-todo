function generateAPIUrl(baseId, tableName) {
  return `https://api.airtable.com/v0/${baseId}/${tableName}`;
}

async function fetchTodosFromAPI() {
  const options = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}` }
  };
  const url = generateAPIUrl(process.env.REACT_APP_AIRTABLE_BASE_ID, process.env.REACT_APP_TABLE_NAME);
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json()
    //console.log(data)
    const todos = data.records.map((todo) => ({
      id: todo.id,
      title: todo.fields.title
    }));
    return todos;
  }
  catch (err) {
    console.log(err.message)
    return [];
  }
}


async function addTodoToAPI(newTodo) {
  try {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({ fields: { title: newTodo.title } }),
    };
    const url = generateAPIUrl(process.env.REACT_APP_AIRTABLE_BASE_ID, process.env.REACT_APP_TABLE_NAME);

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error:${response.status}`)
    }

    const addTodo = await response.json()
    return { id: addTodo.id, title: addTodo.fields.title };
  } catch (err) {
    console.log(err.message)
    return null;
  }
}

export { generateAPIUrl, fetchTodosFromAPI, addTodoToAPI };