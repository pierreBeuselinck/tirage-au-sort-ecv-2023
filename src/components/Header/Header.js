//Components : Header

import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='c-header'>
      <div className='c-header__content'>
        <Link to="/" className='c-header__link'>Tirage au sort</Link>
        <Link to="/absents" className='c-header__link'>Absent.e.s</Link>
      </div>
    </header>
  );
}

export default Header;
