import React from 'react';
import firebase from 'firebase';
import Pagewrapper from './SearchForm/pagewrapper'
import styles from './styles.module.css';

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
            : <Pagewrapper>
                <h1>Aby wyświetlić tę stronę, musisz się zalogować</h1>
            </Pagewrapper>
        )
    }
}

export default Auth;