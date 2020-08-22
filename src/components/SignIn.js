import React from 'react';
import SignInEmail from './SignInEmail'
import SignInGoogle from './SignInGoogle';
import firebase from 'firebase';


class SignIn extends React.Component {
    render() {
        return (
            <div>
                <SignInEmail />
                <hr />
                <SignInGoogle />
            </div>
        )
    }
}

export default SignIn;