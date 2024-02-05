import React, { useState } from 'react';
import AppRoutes from './AppRoutes';
import SideDiv from './components/SideDiv';
import style from './components/TodoListItem.module.css';

function App() {
  const listNames = ['Work', 'Personal', 'School'];
  const [selectedList, setSelectedList] = useState('Personal');
  const onSelectList = (listName) => {
    // Handle the selected list as needed
    console.log(`Selected List: ${listName}`);

    // Update the selectedList state
    setSelectedList(listName);
  };


  return (
    <div className={style.container}>
      <div className={style.box}>
        <SideDiv listNames={listNames} onSelectList={onSelectList} />
      </div>
      <div className={style.box} >
        <AppRoutes selectedList={selectedList} />
      </div>
    </div>
  );
}

export default App;
