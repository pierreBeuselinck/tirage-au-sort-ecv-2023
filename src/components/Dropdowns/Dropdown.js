//Components : Dropdown

import './dropdown.css';

function Dropdown({ option }) {
  return (
    <div className='c-dropdown'>
      <label className='c-dropdown__label'>Ajouter un.e absent.e</label>
      <div className='c-dropdown__container'>
        <select className='c-dropdown__select'>
          <option value="">Sélectionner une personne</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <span class="c-dropdown__icon"></span>
      </div>
    </div>
  );
}

export default Dropdown;
