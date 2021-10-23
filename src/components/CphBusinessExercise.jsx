import React, {useState} from 'react';
import '../css/CphBusinessExercise.css';

const CphBusinessExercise = () => {

    const [name, setName] = useState(undefined);
    const [age, setAge] = useState(undefined);

    const handleNameChange = (event) => {
        console.log('Name', event.target.value);
    }

    const handleAgeChange = (event) => {
        console.log('Age', event.target.value);
    }

    return (
        <div className={'exercise-container'}>
            <label>Name: </label>
            <input value={name} onChange={handleNameChange}/>

            <label>Age: </label>
            <input value={age} onChange={handleAgeChange}/>
        </div>
    );
}

export default CphBusinessExercise;

