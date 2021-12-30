import React, { useEffect, useRef, useState } from 'react';
import { animText } from '../../helpers/element.helper';
import useLottie from '../../hooks/useLottie';

const Cover = ({ title, text, image }) => {
  const anim = useRef();
  const coffeeAnim = useRef();
  const lottieURL  = 'https://assets7.lottiefiles.com/packages/lf20_vfpu2rpp.json';
  const coffeeURL = 'https://assets6.lottiefiles.com/private_files/lf30_4iokaafr.json';
  
  const { loadLottie } = useLottie(lottieURL);
  const { loadLottie: coffeeLottie } = useLottie(coffeeURL);
  const [ lbl, setLbl ] = useState('Web');

  
  useEffect(() => {
    loadLottie(anim.current);
    coffeeLottie(coffeeAnim.current);
    animText(3, setLbl);

    return () => {
      anim.current.innerHTML = '';
      coffeeAnim.current.innerHTML = '';
    }
  }, []);

  return (
    <div id='cover' className='cover'>
      <div className='cover__bg'></div>
      <div className='cover__content'>
        <div className='cover__text'>
          <h2 className='cover__content-title'>
            <span>{'<'}</span>
            <p>
              <span>{ title }</span>
              <span>{ lbl }</span>
            </p>
            <span>{'/>'}</span>
          </h2>
          <p className='section__description'>{ text }</p>
        </div>

        <div id='cover__anim' ref={ anim }></div>
      </div>

      <p className='cover__phrase'>
        El desarrollo de software es tan glorioso como su uso! :)
      </p>
      <div className='loader__coffee'>
        <div className='loader__coffee-content'>
          <div id='cover__anim-coffee' ref={ coffeeAnim }></div>
        </div>
      </div>
    </div>
  )
}

export default Cover;
