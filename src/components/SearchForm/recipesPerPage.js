import React from 'react';
import styles from './search.module.css'

const ViewOption = (props) => {

    const handleClick = (event) => {
        props.onClickedRecipesPerPage(event.currentTarget.textContent)
    }


    return (
        <div className={styles.viewOption}>

            <p> Liczba przepisów na stronie: <span className={styles.link} onClick={handleClick}>8</span>  |  <span className={styles.link} onClick={handleClick}>12</span>  | <span className={styles.link} onClick={handleClick}>16</span>
            </p>

        </div >
    )


}

export default ViewOption;