import React, {useState} from 'react';
import '../css/CphBusinessExercise.css';
import DefaultInput from './DefaultInput';

const CphBusinessExercise = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <div className={'exercise-container'}>
            <DefaultInput
                label={'Name'}
                value={name}
                setValue={setName}
            />
            <DefaultInput
                label={'Age'}
                value={age}
                setValue={setAge}
            />
        </div>
    );
}

export default CphBusinessExercise;

