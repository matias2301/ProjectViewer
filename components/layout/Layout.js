import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
import Header from './Header';
import Head from  'next/head';
import Link from 'next/link';

const Layout = props => {
    return (
        <Fragment>
            <Global
                styles={css`
                    :root{
                        --grey: #3d3d3d;
                        --grey2: #6f6f6f;
                        --grey3: #e1e1e1;
                        --orange: #da553f;
                    }
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after{
                        box-sizing: ingerit;                                             
                    }
                    body{
                        font-size: 1rem;
                        line-height: 1.5;
                        font-family:'PT Sans', sans-serif;
                    }
                    h1, h2, h3{
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1, h2{
                        font-family:'Roboto Slab', serif;
                        font-weight: 700;
                    }
                    h3{
                        font-family:'PT Sans', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    a{
                        text-decoration: none;
                    }
                `}
            />

            <Head>
                <html lang="es" />
                <title>Product Hunt Firebase-Next.js</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
                <link href="/static/css/app.css" rel="stylesheet" />                
            </Head>

            <Header />
                        
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout

// // validar email

// !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

// // validar URL

// !/^(ftp|http|https):\/\/[^ "]+$/
