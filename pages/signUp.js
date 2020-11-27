import React, { Fragment, useState } from 'react';
import { css } from '@emotion/core';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit, Error } from '../components/ui/FormStyles';

import firebase from '../firebase';

// // validaciones
import useValidation from '../hooks/useValidation';
import validateSignUp from '../validation/validateSignUp';

const STATE_INITIAL = {
  name: '',
  email: '',
  password: ''
}

const INITIAL_FOCUS = {
  name: false,
  email: false,
  password: false
}
 
const SignUp = () => {

  const [error, setError] = useState(false);

  const { values, errors, focus, handleSubmit, handleChange, handleBlur, handleFocus } = useValidation(STATE_INITIAL, INITIAL_FOCUS, validateSignUp, signUp);

  const { name, email, password } = values;
  
  async function signUp() {    
    try {
      await firebase.signup(name, email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al crear el usuario ', error.message);
      setError(error.message);
    }
  }


  return (
    <div>
      <Layout>
        <Fragment>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Sign Up</h1>
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
              <Field>
                  <label htmlFor="name">Name</label>
                  <input 
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                  />
              </Field>

              {(errors.name && !focus.name) && <Error>{errors.name}</Error> }
  
              <Field>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                  />
              </Field>
              {(errors.email && !focus.email) && <Error>{errors.email}</Error> }
  
              <Field>
                  <label htmlFor="password">Password</label>
                  <input 
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                  />
              </Field>
              {(errors.password && !focus.password) && <Error>{errors.password}</Error> }

              {error && <Error>{error}</Error>}
  
              <InputSubmit 
                type="submit"
                value="Sign Up"
              />
          </Form>
        </Fragment>
      </Layout>
    </div>
  )
}

export default SignUp