import React from 'react'
import styles from './Dashboard.module.css'
const BasicContainerTwo = (props) => {
  return (
    <div className={styles.basicContainerTwo}>
      <div className={styles.containerTitle}>{props.title} </div>
      <div className={styles.containerContent}>{props.data}</div>
    </div>
  )
}

export default BasicContainerTwo
