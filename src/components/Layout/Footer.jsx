import React from 'react';

const Footer = () => {

  const year = new Date().getFullYear();
  const text = `Todos los derechos reservados MHCode ${ year }`;

  return (
    <div className='footer'>
      <div className='footer__social'>
        <img src="/images/linkdin.svg" alt="" />
        <img src="/images/facebook.svg" alt="" />
        <img src="/images/youtube.svg" alt="" />
      </div>

      <p className='footer__text'>&copy; { text }</p>
    </div>
  )
}

export default Footer;
