import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import students from './data/students';


//Styles
import './assets/css/reset.css';
import './assets/css/App.css';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './pages/Homepage';
import AbsentPage from './pages/Absents';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage students={students} />} />
          <Route path="/absents" element={<AbsentPage students={students} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
