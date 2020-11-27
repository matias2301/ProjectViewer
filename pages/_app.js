import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import useAuth from '../hooks/useAuth';

const MyApp = props => {

    const userLogged = useAuth();
    const { Component, pageProps } = props;

    return (
        <FirebaseContext.Provider
            value = {{
                firebase,
                userLogged,
        }}
        > 
            <Component {...pageProps} />

        </FirebaseContext.Provider>
    )
}

export default MyApp;