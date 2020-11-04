import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <Link href="/">Index</Link>
            <Link href="/">Most Popular</Link>
            <Link href="/">New Product</Link>
        </nav>
    )
}

export default NavBar
