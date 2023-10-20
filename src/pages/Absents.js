import Dropdown from "../components/Dropdowns/Dropdown";
import Button from "../components/Button/Button";

function AbsentPage() {
  return (
    <div className="l-absent">
      <div>
        <Dropdown />
        <Button text="Ajouter"/>
      </div>
      <hr className="l-absent__divider"></hr>
      <div>
        <div>
          <p>Liste des absents</p>
          <ul>
            <li>Yassir</li>
          </ul>
        </div>
        <div>
          <p>Liste des absentes</p>
          <ul>
            <li>Monia</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AbsentPage;
