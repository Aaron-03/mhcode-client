import React, { useEffect } from 'react';
import { elementsAnimated } from '../../data/transition.data';
import { handleScrollAnimated } from '../../helpers/element.helper';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {

  const handleScroll = (e) => {
    const loaderCoffee = document.getElementsByClassName('loader__coffee')[0];
    const posY = window.scrollY;
    const min = 40;
    const max = 610;
    const unit = (100 / max) * posY;

    if (posY > min && posY < max) {
      loaderCoffee.style.width = `calc(${ unit }% - 2em)`; 
    }

    const windowWith = window.innerWidth;
    let position = posY;
    if (windowWith < 900) {
      position = position + 200;
    }

    handleScrollAnimated(position, elementsAnimated);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='layout'>
      <Header />
      <main>
      { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
