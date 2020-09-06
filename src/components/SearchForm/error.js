import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

import PageWrapper from './pagewrapper'
import Button from "@material-ui/core/Button"
import Form from '../Form/Form';

const ErrorDiv = () => {

    const text = `Wygląda na to, że nie mamy tego przepisu:(`

    return (
        <Router>
            <PageWrapper title={text}>
                <h1>Pomóż nam rozwijać naszą apkę i dodaj go!</h1>
                {/* <Link component={Form} /> */}
                {/* <Button color="primary" component={NavLink} to='/Formularz'>Przejdź do formularza</Button> */}
            </PageWrapper>
        </Router>
    )
}

export default ErrorDiv