import React from "react";
import styles from "./AddNewButton.module.scss";
import { type } from "os";
type Props = {
  onClick?: () => void;
  type?: "submit" | "button" | "reset" | undefined;
};

const AddNewButton = ({ onClick, type }: Props) => {
  return (
    <button
      className={styles.addNewButton}
      onClick={onClick}
      type={type ? type : "button"}
    >
      + Add New
    </button>
  );
};

export default AddNewButton;
