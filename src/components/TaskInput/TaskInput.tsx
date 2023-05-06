import React from "react";
import styles from "./TaskInput.module.scss";
import AddNewButton from "../Buttons/AddNewButton/AddNewButton";
type Props = {};

const TaskInput = (props: Props) => {
  return (
    <div className={styles.taskInputDiv}>
      <input className={styles.taskInput} type="text" name="task" id="task" placeholder="Plan your day..." autoFocus/>
      <AddNewButton />
    </div>
  );
};

export default TaskInput;
