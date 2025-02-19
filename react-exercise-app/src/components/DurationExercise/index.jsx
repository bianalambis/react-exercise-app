import React, {useState, useEffect} from 'react';

export default function DurationExercise({name}) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => setTime((t) => t + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60).toString().padStart(2,'0');
        const sec = (seconds % 60).toString().padStart(2,'0');
        return `${minutes}:${sec}`;
    };

    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {formatTime(time)}</p>
            <button onClick = {() => setIsRunning(!isRunning)}>{isRunning ? 'Pause' : 'Start'}</button>
            <button onClick = {() => {setTime(0); setIsRunning(false);}}>Reset</button>
        </div>
    );
}