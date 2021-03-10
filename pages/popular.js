import React from 'react';
import Layout from '../components/layout/Layout';
import ProjectDetail from '../components/layout/projectDetail';
import useProject from '../hooks/useProject';

const Popular = () => {

  const { projects } = useProject('votes');

  return (
    <div>
      <Layout>
        <div className="projectList">
          <div className="content">
            <ul className="bg-white">
              { projects.map( project => (
                <ProjectDetail
                  key={project.id}
                  project={project}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Popular