import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/layout/Layout';
import { FirebaseContext } from '../../firebase';
import Error404 from '../../components/layout/404';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { es } from 'date-fns/locale';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Field, InputSubmit } from "../../components/ui/FormStyles";
import CustomButtom from "../../components/ui/CustomButtom";

const ContainerProject = styled.div`
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
        padding: 0 2rem;
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

const Project = () => {

    //states
    const [project, setProject] = useState({});
    const [error, setError] = useState(false);
    const [comment, setComment] = useState({});
    // const [db, setDb] = useState(true);
    
    //Routing to obtain actual id
    const router = useRouter();
    const { query: {id} } = router;

    //firebase context
    const { firebase, userLogged } = useContext(FirebaseContext);

    useEffect(() => {
        if(id){
            const getProject = async () => {
                const projectQuery = await firebase.db.collection('projects').doc(id);
                const project = await projectQuery.get();
                if (project.exists) {
                    setProject( project.data() );
                    // setDb(false);
                } else {
                    setError( true );
                    // setDb(false);
                }
            }
            getProject();
        }
    }, [id, project]);

    if( Object.keys(project).length === 0 && !error ) return 'Cargando...';
    const { comments, created, description, owner, name, url, urlimage, votes, creator, voted } = project;

    
    //manage votes
    const voteProject = () => {
        if( !userLogged ) return router.push('/login');

        if( voted.includes(userLogged.uid) ) return;
        const updateVoted = [...voted, userLogged.uid];
               
        firebase.db.collection('projects').doc(id).update({
            votes: votes + 1,
            voted: updateVoted,
        });       
        setProject({
            ...project,
            votes: votes + 1
        });
        // setDb(true);  
    }

    const handlerComments = e => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        });
    }

    const ownerProject = id => {
        if ( creator.id === id ) return true;
    }

    const canDelete = () => {
        if( !userLogged ) return false;
        if ( creator.id === userLogged.uid ) return true;
    }

    const addComment = e => {
        e.preventDefault();

        if( !userLogged ) return router.push('/login');
        comment.userId = userLogged.uid;
        comment.userName = userLogged.displayName;
        
        const updateComments = [...comments, comment];

        firebase.db.collection('projects').doc(id).update({
            comments: updateComments
        });
        setProject({
            ...project,
            comments: updateComments
        });
        // setDb(true);
    }

    const deleteProject = async () => {
        if( !userLogged ) return router.push('/login');
        if( creator.id !== userLogged.uid ) return router.push('/');

        try{
            await firebase.db.collection('projects').doc(id).delete();
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
                            <ContainerProject>
                                <div>
                                    <p>Published {formatDistanceToNow(new Date(created))} ago</p>
                                    <p>Owner: {owner}</p>
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
                                                    <p>User:
                                                        <span
                                                            css={css`                                                        
                                                                font-weight: bold;
                                                            `}
                                                        >
                                                            {' '} {com.userName}
                                                        </span>
                                                    </p>
                                                    { ownerProject(com.userId) && 
                                                        <Owner>Project Owner</Owner>
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
                                                onClick={voteProject}
                                            >Vote</CustomButtom>
                                        }
                                    </div>
                                </aside>
                            </ContainerProject>

                            { canDelete() &&
                                <CustomButtom
                                    onClick={deleteProject}
                                >
                                    Delete Project
                                </CustomButtom>
                            }
                        </div>
                    )}
            </>
        </Layout>
    );
}

export default Project
