import React from 'react';
import Link from 'next/link';


const ProjectWeb = () => {
  return (
    <div className='project__item project__item-web'>
      <div className='project__item-cover'>
        <img src="/images/profile.png" alt="" />
      </div>

      <div className='link_to_web'>
        <span>Tienda de regalos de</span>
        <Link
          href='/'
        >
          <a>Ir a la web</a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectWeb;
