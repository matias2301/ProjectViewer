import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';

const Nav = styled.nav`
    display: flex;    
    padding-left: 2rem;
    text-align: center;
    align-self: center;

    a{
        font-size: 1.8rem;
        margin-left: 2rem;        
        color: var(--grey2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type{
            @media(min-width: 768px) {
                margin-right: 2rem;
            }            
        }
    }
    margin-bottom: 1rem;  
    @media (min-width: 768px){       
        margin-bottom: 0;        
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
                <Link href="/newProject">
                    <a>New Project</a>
                </Link>
            }
            
        </Nav>
    )
}

export default NavBar
