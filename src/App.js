import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Styles
import './assets/css/reset.css';
import './assets/css/App.css';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './pages/Homepage';
import AbsentPage from './pages/Absents';


const peoples = [
  { nom: "Mariam", genre: "homme" },
  { nom: "Yassir", genre: "homme" },
  { nom: "Monia", genre: "femme" },
  { nom: "Camille", genre: "femme" },
  { nom: "Patrick", genre: "homme" },
];

function tirageAuSort() {
  const Hommes = peoples.filter((person) => person.genre === "homme");
  const Femmes = peoples.filter((person) => person.genre === "femme");

  const gagnantHomme = Hommes[Math.floor(Math.random() * Hommes.length)];
  const gagnanteFemme = Femmes[Math.floor(Math.random() * Femmes.length)];

  if (gagnantHomme) {
    return (
      <>
        <p className='l-homepage__result-name'>{gagnantHomme.nom} 🌸</p>
        <p>Tu es le grand gagnant !</p>
      </>
    );
  } else if (gagnanteFemme) {
    return (
      <>
        <p>{gagnanteFemme.nom} 🌸</p>
        <p>Tu es la grande gagnante !</p>
      </>
    );
  } else {
    return "Aucun gagnant.";
  }
}

function App() {
  const [gagnantPhrase, setGagnantPhrase] = useState("");

  const handleTirageAuSort = () => {
    const resultatTirage = tirageAuSort();
    setGagnantPhrase(resultatTirage);
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage handleTirageAuSort={handleTirageAuSort} gagnantPhrase={gagnantPhrase} />} />
          <Route path="/absents" element={<AbsentPage peoples={peoples} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
