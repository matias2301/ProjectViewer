import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from "../firebase";

const useProject = order => {

    const [projects, setProjects] = useState([]);
    const { firebase } = useContext( FirebaseContext );

    useEffect(() => {
      const getProjects = () => {
        firebase.db.collection('projects')
          .orderBy( order,'desc')
          .onSnapshot(manageSnapshot)
      }
      getProjects();
    }, []);

    function manageSnapshot( snapshot ){
      const projects = snapshot.docs.map( doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setProjects(projects);
    }

    return {
      projects
    }
}

export default useProject;