import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Header/>
      <Button text="🎰 Sélectionner une personne 🎰" />
      <Footer/>
    </div>
  );
}

export default App;
