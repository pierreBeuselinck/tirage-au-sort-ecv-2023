import React, { useState } from 'react';
import Button from '../components/Button/Button';
import students from '../data/students';

function HomePage() {
  const [winnerName, setWinnerName] = useState('');
  const [winnerGender, setWinnerGender] = useState('');

  const handleWinnerSelection = () => {
    const randomIndex = Math.floor(Math.random() * students.length);
    const winner = students[randomIndex];
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
