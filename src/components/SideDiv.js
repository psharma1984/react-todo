// SideDiv.js
import React from 'react';
import { CiHeart, CiBoxList, CiBank } from 'react-icons/ci';
import style from './TodoListItem.module.css'

const iconMap = {
  Work: <CiBank style={{ margin: '10px', color: 'red', fontSize: '24px' }} />,
  Personal: <CiHeart style={{ margin: '10px', color: 'blue', fontSize: '24px' }} />,
  School: <CiBoxList style={{ margin: '10px', color: 'green', fontSize: '24px' }} />,
  // Add more mappings as needed
};

const SideDiv = ({ listNames, onSelectList }) => {
  return (
    <div className={style.SideDiv}>
      {listNames.map((list) => (
        <div key={list} onClick={() => onSelectList(list)}>
          {iconMap[list]}
          <br />
          {list}

        </div>
      ))}
    </div>
  );
};

export default SideDiv;
