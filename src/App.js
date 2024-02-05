import React, { useState } from 'react';
import SideDiv from './components/SideDiv';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import LandingPage from "./components/LandingPage";
import style from './components/TodoListItem.module.css';

const App = () => {
  const listNames = ['Work', 'Personal', 'School'];
  const [selectedList, setSelectedList] = useState('Personal');
  const onSelectList = (listName) => {
    // Handle the selected list as needed
    console.log(`Selected List: ${listName}`);

    // Update the selectedList state
    setSelectedList(listName);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todolist" element={
          <div className={style.container}>
            <div className={style.box}>
              <SideDiv listNames={listNames} onSelectList={onSelectList} />
            </div>
            <div className={style.box}>
              <TodoContainer selectedList={selectedList} />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


