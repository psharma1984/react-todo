import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.module.css';

function InputWithLabel({ type, id, name, value, onChange, children }) {
    const inputRef = React.useRef()
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, []);

    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input ref={inputRef} id={id} name={name} value={value} type={type} onChange={onChange} />
        </>
    );
}

InputWithLabel.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node,
}

export default InputWithLabel