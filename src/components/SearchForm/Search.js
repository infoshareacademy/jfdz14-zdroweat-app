import React from 'react';
import RangeSlider from "./slider"
import ControlledOpenSelect from "./dropdown"
import BasicTextFields from "./inputSearch"
import styles from "./search.module.css"
import OutlinedButtons from './button';

const SearchContainer = () => {
  return (
    <>
      <div className={styles.flexBar}>
        <BasicTextFields />
        <RangeSlider />
        <ControlledOpenSelect />
        <OutlinedButtons />
      </div>


    </>
  )
}
export default SearchContainer