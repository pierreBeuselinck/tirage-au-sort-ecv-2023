import Dropdown from "../components/Dropdowns/Dropdown";
import Button from "../components/Button/Button";

function AbsentPage() {
  return (
    <div className="l-absent">
      <div className="u-flex-fluid u-width-100">
        <Dropdown />
        <div className="u-mt-32">
          <Button text="Ajouter" isSmall />
        </div>
      </div>
      <hr className="l-absent__divider"></hr>
      <div className="u-flex-fluid">
        <div>
          <p className="l-absent__title">Liste des absents</p>
          <ul className="l-absent__list">
            <li>Yassir</li>
          </ul>
        </div>
        <div className="u-mt-64">
          <p className="l-absent__title">Liste des absentes</p>
          <ul className="l-absent__list">
            <li>Monia</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AbsentPage;
