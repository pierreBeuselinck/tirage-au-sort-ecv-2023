//Components : Link

import './link.css';

function Link({ url, texte }) {
  return (
    <a className='c-link' to={url} target="_blank" rel="noopener noreferrer">
      {texte}
    </a>
  );
}

export default Link;
