import React from 'react'
import styles from "./Dashboard.module.css";
const BasicContainer = (props) => {
    return (
        <div className={styles.basic}>

            <div className={styles.containerTitle}>{props.title} </div>
            <div className={styles.containerContent}>
                <div className={styles.containerData}>{props.data}</div>
                <div className={styles.containerText}>{props.text}</div>
            </div>
        </div>
    )
}

export default BasicContainer