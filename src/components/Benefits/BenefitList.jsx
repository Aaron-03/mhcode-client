import React from 'react';
import BenefitItem from './BenefitItem';

const BenefitList = () => {

  const benefits = [
    {
      id: 1,
      image: '/images/economic.svg',
      title: 'Páginas Web Económicas',
      description: 'Ahorra e incrementa la productividad de tu negocio al mejor precio y sin cargos adicionales.',
      btnClass: 'primary'
    },
    {
      id: 2,
      image: '/images/store.svg',
      title: 'Haz Visible tu Negocio',
      description: 'Potencia tu imagen en internet e incrementa tus clientes. La digitalización ya no es opción, es una necesidad.',
      btnClass: 'secondary'
    },
    {
      id: 3,
      image: '/images/tech_1.svg',
      title: 'Web Personalizada',
      description: 'Te diferenciamos de la competencia. Webs creativas y agradables para que tus clientes tengan la mejor experiencia.',
      btnClass: 'tertiary'
    }
  ];

  return (
    <div className='benefit__container'>
      <div className='benefit__carousel'>
        <div className='benefit__list'>
          {
            benefits.map(benefit => (
              <BenefitItem
                key={ benefit.id }
                benefit={ benefit }
              />
            ))
          }
        </div>
      </div>

      <div className='benefit__dots'>
        {
          benefits.map(b => (
            <a
              key={ b.id }
              href={`#benefit__dots-${ b.id }`}
            ></a>
          ))
        }
      </div>
    </div>
  )
}

export default BenefitList;
