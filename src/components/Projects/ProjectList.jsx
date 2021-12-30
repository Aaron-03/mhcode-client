import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { projectOptions, projects } from '../../data/project.data';
import ProjectItem from './ProjectItem';

const ProjectList = () => {

  const [ options, setOptions ] = useState([]);

  const changeOption = (optId) => {

    
    const opts = options.map(opt => {
      if (opt.id == optId) {
        opt.active = true;
      } else {
        opt.active = false;
      }

      return opt;
    });

    setOptions(opts);
  }

  
  useEffect(() => {
    setOptions(projectOptions);
  }, []);

  return (
    <div className='project'>
      <div className='project__options'>
        {
          options.map(opt => (
            <span
              key={ opt.id }
              onClick={ () => changeOption(opt.id) }
              value={ opt.id }
              className={`${ opt.active ? 'active' : '' }`}
            >{ opt.name }</span>
          ))
        }
      </div>
      <div className='project__list'>
        {
          projects.map(project => (
            <ProjectItem
              key={ project.id }
              project={ project }
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectList;
