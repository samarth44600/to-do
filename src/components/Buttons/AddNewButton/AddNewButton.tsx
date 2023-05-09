import React from "react";
import styles from "./AddNewButton.module.scss";
type Props = {
  onClick?: () => void;

};

const AddNewButton = ({onClick}: Props) => {
  return <button className={styles.addNewButton} onClick={onClick} >+ Add New</button>;
};

export default AddNewButton;
