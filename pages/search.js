import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout';
import ProjectDetail from '../components/layout/projectDetail';
import useProject from '../hooks/useProject';
import { useRouter } from "next/router";

const Search = () => {  

  const [projSearched, setProjSearched] = useState([])
  const router = useRouter();
  const { query: { q }} = router;

  const { projects } = useProject('created');

  useEffect(() => {
    const term = q.toLowerCase();
    const projectFiltered = projects.filter( proj => {
      return (
        proj.name.toLowerCase().includes( term ) ||
        proj.description.toLowerCase().includes( term )
      )
    });
    setProjSearched(projectFiltered);
  }, [ q, projects]);

  return (
    <div>
      <Layout>
        <div className="projectList">
          <div className="content">
            <ul className="bg-white">
              { projSearched.map( project => (
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

export default Search