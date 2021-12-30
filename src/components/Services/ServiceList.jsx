import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = () => {

  const services = [
    {
      id: 1,
      image: '/images/web.svg',
      title: 'Páginas WEB',
      description: 'Tu negocio en línea con herramientas especializadas para que brindes la mejor solución a tus clientes (Landing Page, WebApps, API\'s, etc)',
      btnClass: 'primary'
    },
    {
      id: 2,
      image: '/images/design_ux.svg',
      title: 'Diseño UX/UI',
      description: 'Opta por interfaces gráficas impactantes y evalúa la mejor manera para brindar simpleza a tus clientes',
      btnClass: 'secondary'
    },
    {
      id: 3,
      image: '/images/social-media.svg',
      title: 'Marketing Digital',
      description: 'Las redes sociales son la vía moderna para la visibilidad de tu producto o servicio, llega de forma masiva a tus clientes',
      btnClass: 'secondary'
    },
    {
      id: 4,
      image: '/images/edit-video.svg',
      title: 'Edición Multimedia',
      description: 'Tus imágenes y videos tendrán el enfoque más interesante, los videos en internet no es el futuro, es el hoy!',
      btnClass: 'tertiary'
    }
  ];

  return (
    <div className='service__list'>
      {
        services.map(service => (
          <ServiceItem
            key={ service.id }
            service={ service }
          />
        ))
      }
    </div>
  )
}

export default ServiceList;
