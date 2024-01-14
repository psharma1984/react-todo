import React from 'react';
import './TodoListItem.module.css';

function InputWithLabel(props) {
    const inputRef = React.useRef()
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    });

    return (
        <>
            <input ref={inputRef} id='todoTitle' value={props.value} type='text' name='title' onChange={props.onChange} />
        </>
    );
}

export default InputWithLabel