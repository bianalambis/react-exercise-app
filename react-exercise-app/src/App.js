import React, {useState} from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    {name: 'Squats', type: 'repetition'},
    {name: 'Wall Sits', type: 'duration'},
    {name: 'Standing Marches', type: 'repetition'},
    {name: 'Treadmill', type: 'duration'}
  ];

  return (
    <div>
      {selectedExercise ? (
        selectedExercise.type === 'repetition' ? (
          <RepetitionExercise name = {selectedExercise.name} />
        ) : (
          <DurationExercise name = {selectedExercise.name} />
        )
      ) : (
          <div>
            <h1>Choose your exercise!</h1>
            {exercises.map((exercise, index) => (
              <button key = {index} onClick = {() => setSelectedExercise(exercise)}> {exercise.name}</button>
            ))}
          </div>
      )}
    </div>
    );
  }