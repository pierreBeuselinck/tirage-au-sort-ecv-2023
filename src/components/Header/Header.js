//Components : Header

import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='c-header'>
      <div className='c-header__content'>
        <NavLink to="/" className='c-header__link'>Tirage au sort</NavLink>
        <NavLink to="/absents" className='c-header__link'>Absent.e.s</NavLink>
      </div>
    </header>
  );
}

export default Header;
