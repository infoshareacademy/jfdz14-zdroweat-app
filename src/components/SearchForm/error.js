import React from 'react'
import { StylesProvider } from '@material-ui/core'
import styles from './search.module.css'
import PageWrapper from './pagewrapper'

const ErrorDiv = () => {

    const text = `Wygląda na to, że nie mamy tego przepisu`

    return (
        <PageWrapper title={text}>
            <h1>Pomóż nam rozwijać naszą apkę i dodaj go!</h1>
        </PageWrapper>
    )
}

export default ErrorDiv