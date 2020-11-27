import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import NavBar from './NavBar';
import SearchBar from '../ui/SearchBar';
import CustomButtom from '../ui/CustomButtom';
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.a`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700px;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
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
                        align-items: center;
                    `}
                >
                    <Link href="/">
                        <Logo>Title</Logo>
                    </Link>

                    <SearchBar />

                    <NavBar />
                </div>

                <div
                    css = {css `
                        display: flex;
                        align-items: center;
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
                                >Sing Up</CustomButtom>
                            </Link>
                         </>

                    )}

                </div>
            </ContenedorHeader>
        </header>
    )
}

export default Header
