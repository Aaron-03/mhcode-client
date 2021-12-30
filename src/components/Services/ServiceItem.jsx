import React, { useEffect, useRef } from 'react';
import { getStyle } from '../../helpers/element.helper';

const ServiceItem = ({ service }) => {

  const { id, image, title, description, btnClass } = service;
  const content = useRef();
  const btn = useRef();
  
  const screenHover = (isHover = true) => {
    const current = content.current;
    const btnCurrent = btn.current;

    if (isHover === true) {
      current.classList.add('active');
    } else {
      current.classList.remove('active');
    }
  }

  // useEffect(() => {
  //   btn.addEventListener('onhover', screenHover)
  // }, [])

  return (
    <div id={`serv__${ id }`} ref={ content } className='service__item anim_movement_service_in'>
      <div className='service__item-cover'>
        <img src={ image } alt="" />
      </div>

      <div className='service__item-text'>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <button
          ref={ btn }
          onMouseOver={ () => screenHover(true) }
          onMouseOut={ () => screenHover(false) }
          type='submit'
          className={`btn btn-${ btnClass }`}
        >Lo quiero!</button>
      </div>
    </div>
  )
}

export default ServiceItem;
