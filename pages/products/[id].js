import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/layout/Layout';
import { FirebaseContext } from '../../firebase';
import Error404 from '../../components/layout/404';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Field, InputSubmit } from "../../components/ui/FormStyles";
import CustomButtom from "../../components/ui/CustomButtom";

const ContainerProduct = styled.div`
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const Owner = styled.p`
    padding: .5rem 2rem;
    background-color: #DA552F;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`;

const Product = () => {

    //states
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [comment, setComment] = useState({});
    const [db, setDb] = useState(true);
    
    //Routing to obtain actual id
    const router = useRouter();
    const { query: {id} } = router;

    //firebase context
    const { firebase, userLogged } = useContext(FirebaseContext);

    useEffect(() => {
        if(id && db){
            const getProduct = async () => {
                const productQuery = await firebase.db.collection('products').doc(id);
                const product = await productQuery.get();
                if (product.exists) {
                    setProduct( product.data() );
                    setDb(false);
                } else {
                    setError( true );
                    setDb(false);
                }
            }
            getProduct();
        }
    }, [id]);

    if( Object.keys(product).length === 0 && !error ) return 'Cargando...';
    const { comments, created, description, company, name, url, urlimage, votes, creator, voted } = product;

    
    //manage votes
    const voteProduct = () => {
        if( !userLogged ) return router.push('/login');

        if( voted.includes(userLogged.uid) ) return;
        const updateVoted = [...voted, userLogged.uid];
               
        firebase.db.collection('products').doc(id).update({
            votes: votes + 1,
            voted: updateVoted,
        });       
        setProduct({
            ...product,
            votes: votes + 1
        });
        setDb(true);  
    }

    const handlerComments = e => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        });
    }

    const ownerProduct = id => {
        if ( creator.id === id ) return true;
    }

    const mayDelete = () => {
        if( !userLogged ) return false;
        if ( creator.id === userLogged.uid ) return true;
    }

    const addComment = e => {
        e.preventDefault();

        if( !userLogged ) return router.push('/login');
        comment.userId = userLogged.uid;
        comment.userName = userLogged.displayName;
        
        const updateComments = [...comments, comment];

        firebase.db.collection('products').doc(id).update({
            comments: updateComments
        });
        setProduct({
            ...product,
            comments: updateComments
        });
        setDb(true);
    }

    const deleteProduct = async () => {
        if( !userLogged ) return router.push('/login');
        if( creator.id !== userLogged.uid ) return router.push('/');

        try{
            await firebase.db.collection('products').doc(id).delete();
            router.push('/');
        } catch( error ){
            console.log(error);
        }
    }

    return (
        <Layout>
            <>
                { error
                    ?
                        <Error404 />
                    : 
                    (
                        <div className="container">
                            <h1 css = {css`
                                text-align: center;
                                margin-top: 5rem;
                            `}>
                                { name }
                            </h1>
                            <ContainerProduct>
                                <div>
                                    <p>Published {formatDistanceToNow(new Date(created), {locale: es})} ago</p>
                                    <p>By: {creator.name} from {company}</p>
                                    <img src={urlimage} />
                                    <p>{description}</p>

                                    { userLogged && (
                                        <>
                                            <h2>Add a Comment</h2>
                                            <form
                                                onSubmit={addComment}
                                            >
                                                <Field>
                                                    <input
                                                        type="text"
                                                        name="comment"
                                                        onChange={handlerComments}
                                                    />
                                                </Field>
                                                <InputSubmit
                                                    type="submit"
                                                    value="ADD"
                                                />
                                            </form>
                                        </>
                                        )                            
                                    }

                                    <h2 css={css`
                                        margin: 2rem 0;
                                    `}>Comments</h2>
                                    
                                    { 
                                        comments.length === 0
                                    ?
                                        "No comments yet!"
                                    :
                                        <ul>                                    
                                            { comments.map( (com, i) => (                                                                                                      
                                                <li
                                                    key={i}
                                                    css={css`
                                                        border: 1px solid #e1e1e1;
                                                        padding: 2rem;
                                                    `}
                                                >
                                                    <p>{ com.comment }</p>
                                                    <p>Author:
                                                        <span
                                                            css={css`                                                        
                                                                font-weight: bold;
                                                            `}
                                                        >
                                                            {' '} {com.userName}
                                                        </span>
                                                    </p>
                                                    { ownerProduct(com.userId) && 
                                                        <Owner>Product Owner</Owner>
                                                    }
                                                </li>                                        
                                            ))}
                                        </ul>
                                    }
                                </div>
                                <aside>
                                    <CustomButtom
                                        target="_blank"
                                        bgColor="true"
                                        href={url}
                                    >
                                        Visit URL
                                    </CustomButtom>
                                    <div css={css`
                                        margin-top: 5rem;
                                    `}>
                                        <p css={css`
                                            text-align: center;
                                        `}>
                                            {votes} Votes
                                        </p>
                                        { userLogged &&
                                            <CustomButtom
                                                onClick={voteProduct}
                                            >Vote</CustomButtom>
                                        }
                                    </div>
                                </aside>
                            </ContainerProduct>

                            { mayDelete() &&
                                <CustomButtom
                                    onClick={deleteProduct}
                                >
                                    Delete Product
                                </CustomButtom>
                            }
                        </div>
                    )}
            </>
        </Layout>
    );
}

export default Product
