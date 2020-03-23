import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth ();
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            //console.log('redirec now');
            window.location.pathname = '/review'
        })
    }
    const handleSignOut = () => {
        auth.signOut()
        .then (res => {
        window.location.pathname= '/';
        });
    }
    //console.log(auth);

    return (
        <div>
            <h1>This is the LOGIN AREA!</h1>

            {
                auth.user ? <button onClick={handleSignOut}>Sign Out</button> : 
                <button onClick={handleSignIn}>Sign in with Google</button>
            } 
        </div>
    );
};

export default Login;