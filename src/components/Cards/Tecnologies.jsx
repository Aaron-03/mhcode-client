import React from 'react';

const Tecnologies = () => {

  const images = [
    { id: 1, path: '/images/html-5.svg' },
    { id: 2, path: '/images/css-3.svg' },
    { id: 3, path: '/images/js-official.svg' },
    { id: 4, path: '/images/mongodb.svg' },
    { id: 5, path: '/images/mysql.svg' },
    { id: 6, path: '/images/next-js.svg' },
    { id: 7, path: '/images/react.svg' },
    { id: 8, path: '/images/ruby.svg' },
    { id: 9, path: '/images/java.svg' },
    { id: 10, path: '/images/git.svg' }
  ];

  return (
    <div className='tecnologies'>
      <p className='tecnologies__text'>
        Estas son algunas de las herramientas que utilizo para la realización de proyectos
        web y software en general.
      </p>

      <div className='tecnologies__images-container'>
        <div className='tecnologies__images'>
          {
            images.map(image => (
              <img
                key={ image.id }
                src={ image.path }
                alt=""
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tecnologies;
