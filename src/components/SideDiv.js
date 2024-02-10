// SideDiv.js
import React from 'react';
import PropTypes from 'prop-types';
import { CiHeart, CiBoxList, CiBank } from 'react-icons/ci';
import style from './TodoListItem.module.css'

const iconMap = {
  Work: <CiBank style={{ margin: '10px', color: 'red', fontSize: '24px' }} />,
  Personal: <CiHeart style={{ margin: '10px', color: 'blue', fontSize: '24px' }} />,
  School: <CiBoxList style={{ margin: '10px', color: 'green', fontSize: '24px' }} />,
  // Add more mappings as needed
};

const SideDiv = ({ tableNames, onTableName }) => {
  return (
    <div className={style.SideDiv}>
      {tableNames.map((table) => (
        <div key={table} onClick={() => onTableName(table)}>
          {iconMap[table]}
          <br />
          {table}

        </div>
      ))}
    </div>
  );
};

SideDiv.propTypes = {
  tableNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTableName: PropTypes.func.isRequired,
};

export default SideDiv;
