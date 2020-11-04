import React from 'react';
import SearchBar from '../ui/SearchBar';
import NavBar from './NavBar';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>Paragraph</p>

                    <SearchBar />

                    <NavBar />
                </div>

                <div>
                    <p>Admin Panel</p>
                    <button type="button">Close Sesion</button>
                    
                    <Link href="/">Login</Link>
                    <Link href="/">Sign Up</Link>

                </div>
            </div>
        </header>

    )
}

export default Header
