import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import NavBar from './NavBar';
import SearchBar from '../ui/SearchBar';
import CustomButtom from '../ui/CustomButtom';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95px;
    margin: 0 auto;
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700px;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const Header = () => {

    const user = true;

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
                    { user ? (
                        <>
                            <p
                                css = {css `
                                        margin-right: 2rem;
                                    `}
                            >Admin Panel</p>
        
                            <CustomButtom
                                bgColor={true}
                            >Close Session</CustomButtom>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <CustomButtom
                                    bgColor={true}
                                >Login</CustomButtom>
                            </Link>
                            <Link href="/">
                                <CustomButtom
                                    bgColor={true}
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
