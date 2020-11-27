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
import validateCreateProduct from '../validation/validateCreateProduct';

const STATE_INICIAL = {
  name: '',
  company: '',
  image: '',
  url: '',
  description: ''
}

const INITIAL_FOCUS = {
  name: false,
  company: false,
  url: false,
  description: false
}

const NewProduct = () => {

  // images states
  const [imageName, setImageName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [inProgress, setInProgress] = useState(0);
  const [urlimage, setUrlImage] = useState('');

  const [ error, setError] = useState(false);

  const { values, errors, focus, handleSubmit, handleChange, handleBlur, handleFocus } = useValidation(STATE_INICIAL, INITIAL_FOCUS, validateCreateProduct, createProduct); 

  const { name, company, image, url, description } = values;

  // hook de routing to redirect
  const router = useRouter();

  // context with firebase crud operations
  const { userLogged, firebase } = useContext(FirebaseContext);
  
  async function createProduct() {

    // if no userLogged redirect to Login
    if(!userLogged) {
      return router.push('/login');
    }
    
    const product = {
        name, 
        company, 
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
    firebase.db.collection('products').add(product);

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
          .ref("products")
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
            >New Product</h1>
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
                        placeholder="Product Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </Field>

                {(errors.name && !focus.name) && <Error>{errors.name}</Error> }
    
                <Field>
                    <label htmlFor="company">Company</label>
                    <input 
                        type="text"
                        id="company"
                        placeholder="Company Name"
                        name="company"
                        value={company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </Field>

                {(errors.company && !focus.company) && <Error>{errors.company}</Error> }
    
                <Field>
                    <label htmlFor="image">Image</label>
                    <FileUploader 
                        accept="image/*"
                        id="image"
                        name="image"
                        randomizeFilename
                        storageRef={firebase.storage.ref("products")}
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
                        placeholder="Product URL"
                        value={url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </Field>

                {(errors.url && !focus.url) && <Error>{errors.url}</Error> }
              </fieldset>

              <fieldset>
                <legend>About your Product</legend>

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
                  value="Create Product"                  
                />
            </Form>
          </>
        )
      }
        
      </Layout>
    </div>
  )
}

export default NewProduct