import React from 'react';

function InputWithLabel(props) {
    const inputRef = React.useRef()
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    });

    return (
        <>
            <label htmlFor='todoTitle'>{props.children}</label>
            <input ref={inputRef} id='todoTitle' value={props.value} type='text' name='title' onChange={props.onChange} />
        </>
    );
}

export default InputWithLabel