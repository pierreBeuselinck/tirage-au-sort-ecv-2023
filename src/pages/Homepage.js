import React, { useState, useContext } from 'react';
import Button from '../components/Button/Button';
import { StudentContext } from '../StudentContext';

function HomePage() {
  const [winnerName, setWinnerName] = useState('');
  const [winnerGender, setWinnerGender] = useState('');

  const [students, , absentStudents] = useContext(StudentContext);

  const handleWinnerSelection = () => {
    const presentStudents = students.filter(student => !absentStudents.includes(student.name));
    const randomIndex = Math.floor(Math.random() * presentStudents.length);
    const winner = presentStudents[randomIndex];
    setWinnerName(winner.name);
    setWinnerGender(winner.genre);
  };


  return (
    <div className='l-homepage'>
      <div className='l-homepage__button'>
        <Button text="🎰 Sélectionner une personne 🎰" onClick={handleWinnerSelection} />
      </div>
      <div className='l-homepage__result'>
        {winnerName ? (
          <div className='u-text-center'>
            <p className='l-homepage__result-name'>{winnerName}🌸</p>
            <p>
              Tu es l{winnerGender === 'femme' ? 'a' : 'e'} grand{winnerGender === 'femme' ? 'e' : ''} gagnant{winnerGender === 'femme' ? 'e' : ''}
            </p>
          </div>
        ) : (
          <p>Personne n’a été sélectionné actuellement 👀</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
