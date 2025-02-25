import React, {useState, useEffect} from 'react';

export default function RunningExercise({name}) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => setTime((t) => t + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds/60).toString().padStart(2,'0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${sec}`;
    };

    const recordLap = () => {
        setLaps([...laps, formatTime(time)]);
    };

    return (
        <div>
            <h2>{name}</h2>
            <p>Time:{formatTime(time)}</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'STart'}
            </button>
            <button onClick={recordLap}>
                Record Lap
            </button>
            <button onClick={() => {setTime(0); setLaps([]); setIsRunning(false);}}>
                Reset
            </button>
            <h3> Lap Times:</h3>
            <ul>
                {laps.maps((lap, index) => (
                    <li key = {index}>Lap {index + 1}</li>
                ))}
            </ul>
        </div>
    );
};