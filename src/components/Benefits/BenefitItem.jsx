import React from 'react';

const BenefitItem = ({ benefit }) => {

  const { id, image, title, description, btnClass } = benefit;

  return (
    <div id={`benefit__dots-${ id }`} className='benefit__item'>
      <div className='benefit__item-cover'>
        <img src={ image } alt="" />
      </div>

      <div className='benefit__item-text'>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default BenefitItem;
