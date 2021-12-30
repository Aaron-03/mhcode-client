import Image from 'next/image';
import React from 'react';
import { navList } from '../../data/navbar.data';

const Navbar = ({ isActive, setBurgerActive }) => {

  const navActive = isActive ? 'active' : '';

  const handleNavbarActive = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 900) {
      setBurgerActive(!isActive); 
    }
  }

  return (
    <nav className={`navbar ${ navActive }`}>
      <ul className='navbar__list'>
        {
          navList.map(item => (
            <li key={ item.id } onClick={ handleNavbarActive } className='navbar__list-item'>
              <a href={ item.slug }>
                { item.name }
              </a>
            </li>
          ))
        }
      </ul>

      <div className='navbar__code'>
        <Image
          src='/images/code.svg'
          width={ 64 }
          height={ 64 }
        />

        <p>Una frase chévere de programación</p>
      </div>
    </nav>
  )
}

export default Navbar;
