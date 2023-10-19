import Button from "../components/Button/Button";

function HomePage({ handleTirageAuSort, gagnantPhrase }) {
  return (
    <div className='l-homepage'>
      <div className='l-homepage__button'>
        <Button text="🎰 Sélectionner une personne 🎰" onClick={handleTirageAuSort} />
      </div>
      <div className='l-homepage__result'>
        {gagnantPhrase}
      </div>
    </div>
  );
}

export default HomePage;
