import React, { useEffect, useRef } from 'react';
import { profileData } from '../../data/profile.data';
import { transitionData } from '../../data/transition.data';
import { handleScrollAnimated } from '../../helpers/element.helper';
import useAnimation from '../../hooks/useAnimation';

const CardInfo = () => {

  const cardElement = useRef();

  const {
    name,
    title,
    description,
    profile,
    flag
  } = profileData;


  return (
    <div id='card__info' className='card__info' ref={ cardElement }>
      <div className='card__info-content'>
        <div className='card__info-profile'>
          <img src={ profile } alt={ name } />
        </div>
      </div>

      
      <div className='card__images'>
        <img
          id='card__image-dev'
          className='card__image'
          src="/images/dev.svg"
          alt=""
        />

        <img
          id='card__image-book'
          className='card__image'
          src="/images/code_book.svg"
          alt=""
        />

        <img
          id='card__image-laptop'
          className='card__image'
          src="/images/laptop.svg"
          alt=""
        />

        <img
          id='card__image-message'
          className='card__image'
          src="/images/message.svg"
          alt=""
        />
      </div>
      {/* <div className='card__info-social'>
        <img src="/images/linkdin.svg" alt="" />
        <img src="/images/facebook.svg" alt="" />
        <img src="/images/youtube.svg" alt="" />
      </div> */}
    </div>
  )
}

export default CardInfo;
