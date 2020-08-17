import React from 'react';
import { Redirect, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import firebase from 'firebase';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        redirect: false
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        if (this.props.isSignUp) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((userData) => {
                    this.setState({
                        redirect: true
                    })
                    console.log(userData)
                })
                .catch((error) => {
                    alert(error.message)
                })
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((userData) => {
                    this.setState({
                        redirect: true
                    })
                    console.log(userData)
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
    }
    
    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <Container component="main" maxWidth="xs">
                <h1>
                    {
                        this.props.isSignUp
                        ? "Zarejestruj się"
                        : "Zaloguj się"
                    }
                </h1>
                    <form noValidate onSubmit={this.handleOnSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Adres email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleOnChange}
                            value={this.state.email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Hasło"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleOnChange}
                            value={this.state.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            {this.props.isSignUp ? "Zarejestruj się" : "Zaloguj się"}
                            
                        </Button>
                        <Grid container>
                                <Link href="#" variant="body2">
                                    {
                                        this.props.isSignUp
                                        ? <Link to='/signin'>Masz już konto? Zaloguj się </Link>
                                        : <Link to='/signup'>Nie masz jeszcze konta? Zarejestruj się </Link>
                                    }
                                </Link>
                        
                        </Grid>
                    </form>
                </Container>
            
        )
    }
}

export default SignIn;