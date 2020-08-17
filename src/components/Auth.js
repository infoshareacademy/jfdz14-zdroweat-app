import React from 'react';
import firebase from 'firebase';

class Auth extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                user
            })
        })
        this.setState({
            unsubscribe
        })
    }

    componentWillUnmount() {
        this.state.unsubscribe();
    }

    render() {
        return(
            this.state.user
            ? this.props.children
            : <h1>Aby wyświetlić tę stronę, musisz się zalogować</h1>
        )
    }
}

export default Auth;