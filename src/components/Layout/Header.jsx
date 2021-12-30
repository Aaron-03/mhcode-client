import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const Header = () => {

  const [ burgerActive, setBurgerActive ] = useState(false);

  const burderStyle = burgerActive ? 'active' : '';

  return (
    <header className='header'>
      <div className='header__logo'>
        <Image
          src='/images/logo.svg'
          width={ 64 }
          height={ 64 }
        />
      </div>

      <Navbar
        isActive={ burgerActive }
        setBurgerActive={ setBurgerActive }
      />

      <div
        className={`header__burger ${ burderStyle }`}
        onClick={ () => setBurgerActive(!burgerActive) }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header;
