import React, { useState } from 'react'
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Router from "next/router";

const InputText = styled.input`
    border: 1px solid var(--grey3);
    padding: 1rem;
    min-width: 300px;
`;

const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/search.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: white;
    border: none;
    text-indent: -9999px;

    &:hover{
        cursor: pointer;
    }
`;

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if( search.trim() === '' ) return;
        Router.push({
            pathname: '/search',
            query: { q: search }
        });
    }

    return (
        <form
            css={css`
                position: relative;
                margin-bottom: 2rem;  
                @media (min-width: 768px){        
                    margin-bottom: 0;        
                }
            `}
            onSubmit={handleSubmit}
        >
            <InputText
                type="text"
                placeholder="Search Project"
                onChange={ e => setSearch(e.target.value) }
            />

            <InputSubmit type="submit">Search</InputSubmit>
        </form>
    )
}

export default SearchBar