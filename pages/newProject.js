import React, { useState, useContext } from 'react';
import { css } from '@emotion/core';
import Router, { useRouter } from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit, Error } from '../components/ui/FormStyles';

import { FirebaseContext } from '../firebase';

import Error404 from '../components/layout/404';

// validations
import useValidation from '../hooks/useValidation';
import validateCreateProject from '../validation/validateCreateProject';

const STATE_INICIAL = {
  name: '',
  owner: '',
  image: '',
  url: '',
  description: ''
}

const INITIAL_FOCUS = {
  name: false,
  owner: false,
  url: false,
  description: false
}

const NewProject = () => {

  // images states
  const [imageName, setImageName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [inProgress, setInProgress] = useState(0);
  const [urlimage, setUrlImage] = useState('');

  const [ error, setError] = useState(false);

  const { values, errors, focus, handleSubmit, handleChange, handleBlur, handleFocus } = useValidation(STATE_INICIAL, INITIAL_FOCUS, validateCreateProject, createProject); 

  const { name, owner, image, url, description } = values;

  // hook de routing to redirect
  const router = useRouter();

  // context with firebase crud operations
  const { userLogged, firebase } = useContext(FirebaseContext);
  
  async function createProject() {

    // if no userLogged redirect to Login
    if(!userLogged) {
      return router.push('/login');
    }
    
    const project = {
        name, 
        owner, 
        url, 
        urlimage,
        description,
        votes: 0,
        comments: [],
        created: Date.now(), 
        creator: {
          id: userLogged.uid,
          name: userLogged.displayName
        }, 
        voted: []
    }

    // insert it in the data base
    firebase.db.collection('projects').add(project);

    return router.push('/');
  }


  const handleUploadStart = () => {
      setInProgress(0);
      setUploading(true);
  }

  const handleProgress = inProgress => setInProgress({ inProgress });

  const handleUploadError = error => {
      setUploading(error);
      console.error(error);
  };

  const handleUploadSuccess = name => {
      setInProgress(100);
      setUploading(false);
      setImageName(name)
      firebase
          .storage
          .ref("projects")
          .child(name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setUrlImage(url);
          });
  };

  return (
    <div>
      <Layout>
        { !userLogged ? <Error404 /> : (
          <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >New Project</h1>
            <Form
              onSubmit={handleSubmit}
              noValidate
            >

              <fieldset>
                <legend>General Info</legend>
            
                <Field>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        placeholder="Project Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </Field>

                {(errors.name && !focus.name) && <Error>{errors.name}</Error> }
    
                <Field>
                    <label htmlFor="owner">Owner</label>
                    <input 
                        type="text"
                        id="owner"
                        placeholder="Owner"
                        name="owner"
                        value={owner}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </Field>

                {(errors.owner && !focus.owner) && <Error>{errors.owner}</Error> }
    
                <Field>
                    <label htmlFor="image">Image</label>
                    <FileUploader 
                        accept="image/*"
                        id="image"
                        name="image"
                        randomizeFilename
                        storageRef={firebase.storage.ref("projects")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                    />
                </Field>
                <Field>
                    <label htmlFor="url">URL</label>
                    <input 
                        type="url"
                        id="url"
                        name="url"
                        placeholder="Project URL"
                        value={url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </Field>

                {(errors.url && !focus.url) && <Error>{errors.url}</Error> }
              </fieldset>

              <fieldset>
                <legend>About your Project</legend>

                <Field>
                    <label htmlFor="descripcion">Description</label>
                    <textarea 
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </Field>

                {(errors.description && !focus.description) && <Error>{errors.description}</Error> }
              </fieldset>

                {error && <Error>{error} </Error>}
    
                <InputSubmit
                  type="submit"
                  value="Load Project"                  
                />
            </Form>
          </>
        )
      }
        
      </Layout>
    </div>
  )
}

export default NewProject