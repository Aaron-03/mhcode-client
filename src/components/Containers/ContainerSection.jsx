import React from 'react'

const ContainerSection = ({ identifier, subtitle, children }) => {
  return (
    <section id={ identifier } className='container__section' style={{
      flexDirection: 'column'
    }}>
      <div className='section__subtitle'>
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
      { children }
    </section>
  )
}

export default ContainerSection;
