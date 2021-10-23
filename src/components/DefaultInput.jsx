import React from 'react';

const DefaultInput = ({label, value, setValue}) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <label>{label}: </label>
            <input value={value} onChange={handleChange}/>
        </>
    );
}

export default DefaultInput;