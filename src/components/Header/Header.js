//Components : Header

import './header.css';

import Link from '../Link/Link';

function Header() {
    return (
        <header className='c-header'>
            <div className='c-header__content'>
                <Link url="#" texte="Tirage au sort" />
                <Link url="#" texte="Absent.e.s" />
            </div>
        </header>
    );
}

export default Header;
