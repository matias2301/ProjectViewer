import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import NavBar from './NavBar';
import SearchBar from '../ui/SearchBar';
import CustomButtom from '../ui/CustomButtom';
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
    display: flex;
    flex: 1;    
    flex-direction: column;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 800px){        
        flex-direction: row;
        justify-content: space-around;       
    }
`;

const Logo = styled.a`
    text-align: 'center';
    color: var(--orange);
    font-size: 3rem;    
    align-self: center;
    line-height: 3.5rem;
    font-weight: 700px;
    font-family: 'Roboto Slab', serif;
    margin-right: 0;
    margin-bottom: 2rem;  
    @media (min-width: 768px){        
        margin-bottom: 0;
        margin-right: 5rem;        
    }    
`;

const Header = () => {

    const { userLogged, firebase } = useContext(FirebaseContext);

    return (
        <header
            css = {css `
                border-bottom: 2px solid var(--grey3);
                padding: 1rem 0;
            `}
        >
            <ContenedorHeader>
                <div
                    css = {css `
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        @media (min-width: 768px){        
                            flex-direction: row;
                            justify-content: space-around;      
                        }
                    `}
                >
                    <Link href="/">
                        <Logo>Project Viewer</Logo>
                    </Link>

                    <SearchBar />

                    <NavBar />
                </div>

                <div
                    css = {css `
                        display: flex;
                        flex-wrap: wrap;                
                    `}
                >
                    { userLogged ? (
                        <>
                            <p
                                css = {css `
                                        margin-right: 2rem;
                                    `}
                            >Hi { userLogged.displayName }</p>
        
                            <CustomButtom
                                bgColor="true"
                                onClick={() => firebase.closeSession()}
                            >Close Session</CustomButtom>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <CustomButtom
                                    bgColor="true"
                                >Login</CustomButtom>
                            </Link>
                            <Link href="/signUp">
                                <CustomButtom
                                    bgColor="true"
                                >Register</CustomButtom>
                            </Link>
                         </>

                    )}

                </div>
            </ContenedorHeader>
        </header>
    )
}

export default Header
