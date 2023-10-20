//Components : Button

import './button.css';

function Button({ text, onClick, isSmall }) {
  const buttonClassName = isSmall ? 'c-button c-button--small' : 'c-button';

  return (
    <button className={buttonClassName}  onClick={onClick}>{text}</button>
  );
}

export default Button;

