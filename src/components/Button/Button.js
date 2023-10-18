//Components : Button

import './button.css';

function Button({ text, onClick }) {
  return (
    <button className='c-button' onClick={onClick}>{text}</button>
  );
}

export default Button;

