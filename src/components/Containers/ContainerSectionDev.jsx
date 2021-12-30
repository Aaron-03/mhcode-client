import React, { useEffect, useRef } from 'react'
import { profileData } from '../../data/profile.data';
import { transitionData } from '../../data/transition.data';
import { handleScrollAnimated } from '../../helpers/element.helper';

const ContainerSection = ({ subtitle, children, reverse = false }) => {

  const sectionElement = useRef();

  const {
    name,
    title,
    description,
    profile,
    flag
  } = profileData;

  return (
    <section id='container__section'  className='container__section'>
      <div id='section__subtitle' className='section__subtitle' ref={ sectionElement }>
        <div>
          <h3 className='section__subtitle-text'>{ subtitle }</h3>
          <div className='section__subtitle-lines'>
            <span></span>
            <img
              src="/images/code_white.svg"
              alt="code"
            />
            <span></span>
          </div>
        </div>

        <div>
          <div className='section__subtitle-description section__description'>
            <p>{ description }</p>
            <img
              id='info__flag'
              src={ flag }
              alt={ name }
            />
            <div className='card__info-social'>
              <img src="/images/linkdin.svg" alt="" />
              <img src="/images/facebook.svg" alt="" />
              <img src="/images/youtube.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      { children }
    </section>
  )
}

export default ContainerSection;
