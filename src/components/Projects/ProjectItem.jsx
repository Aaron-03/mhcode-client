import React, { useEffect } from 'react';
import ProjectOthers from './ProjectOthers';
import ProjectVideo from './ProjectVideo';
import ProjectWeb from './ProjectWeb';

const ProjectItem = ({ project }) => {

  const { type } = project;

  const getProjectComponent = (_type) => {
    switch (_type) {
      case 'web':
        return <ProjectWeb />;
      case 'video':
        return <ProjectVideo />;
      case 'others':
        return <ProjectOthers />;
      default:
        return <ProjectOthers />;
    }
  }

  return (
    <>
      {
        getProjectComponent(type)
      }
    </>
  )
}

export default ProjectItem;
