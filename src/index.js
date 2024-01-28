import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import SideDiv from './components/SideDiv';
import style from './components/TodoListItem.module.css';

const root = createRoot(document.getElementById('root'));
const listNames = ['Work', 'Personal', 'School'];

const RootComponent = () => {
  // Set 'Personal' as the initial selectedList
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
        <App selectedList={selectedList} />
      </div>
    </div>
  );

}

//Initial Rendering
root.render(
  <React.StrictMode>
    <RootComponent />
    {/* <div className="container">
      <SideDiv listNames={listNames} onSelectList={onSelectList} />
      <div className="box" id="root">
        <App />
      </div>
    </div> */}
  </React.StrictMode>
);
