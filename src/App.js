import React, { useState } from 'react';
import SideDiv from './components/SideDiv';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import LandingPage from "./components/LandingPage";
import style from './components/TodoListItem.module.css';


const App = () => {
  const tableNames = ['Work', 'Personal', 'School'];
  const [tableName, setTableName] = useState('Personal');
  const onTableName = (tableName) => {
    setTableName(tableName);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todolist" element={
          <div className={style.container}>
            <div className={style.box}>
              <SideDiv tableNames={tableNames} onTableName={onTableName} />
            </div>
            <div className={style.box}>
              <TodoContainer tableName={tableName} />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


