import React from "react";
import styles from "./AddNewButton.module.scss";
type Props = {};

const AddNewButton = (props: Props) => {
  return <button className={styles.addNewButton}>+ Add New</button>;
};

export default AddNewButton;
