import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';

const Nav = styled.nav`
    padding-left: 2rem;

    a{
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--grey2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type{
            margin-right: 0;
        }
    }
`;

const NavBar = () => {

    const { userLogged } = useContext(FirebaseContext);

    return (
        <Nav>
            <Link href="/">
                <a>Index</a>
            </Link>
            <Link href="/popular">
                <a>Most Popular</a>
            </Link>
            { userLogged && 
                <Link href="/newProduct">
                    <a>New Product</a>
                </Link>
            }
            
        </Nav>
    )
}

export default NavBar
