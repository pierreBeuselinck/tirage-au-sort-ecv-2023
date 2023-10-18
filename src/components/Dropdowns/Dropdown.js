//Components : Dropdown

function Dropdown({ options }) {
  return (
    <div>
      <label>Ajouter un.e absent.e</label>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
