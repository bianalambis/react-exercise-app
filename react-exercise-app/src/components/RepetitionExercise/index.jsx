import React, {useState} from 'react';

export default function RepetitionExercise({name}) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{name}</h2>
            <p>Repetitions: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add Rep</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}