import React, { Fragment, useState } from 'react';
import { css } from '@emotion/core';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit, Error } from '../components/ui/FormStyles';

import firebase from '../firebase';

// // validations
import useValidation from '../hooks/useValidation';
import validateLogin from '../validation/validateLogin';

const STATE_INITIAL = {  
  email: '',
  password: ''
}

const INITIAL_FOCUS = {
  email: false,
  password:false
}


const Login = () => {
  const [error, setError] = useState(false);

  const { values, errors, focus, handleSubmit, handleChange, handleBlur, handleFocus } = useValidation(STATE_INITIAL, INITIAL_FOCUS,validateLogin, login);

  const { email, password } = values;
  
async function login() {
  try {
    await firebase.login(email, password);
    Router.push('/');
  } catch (error) {
    console.error('Something went wrong ', error.message);
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
          >Login</h1>
          <Form
            onSubmit={handleSubmit}
            noValidate
          >  
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
              value="Login"
            />
          </Form>
        </Fragment>
      </Layout>
    </div>
  )
}

export default Login