import React from "react";
import styles from "./TaskInput.module.scss";
import AddNewButton from "../Buttons/AddNewButton/AddNewButton";
type Props = {};

const TaskInput = (props: Props) => {
  return (
    <div className={styles.taskInputDiv}>
      <div className={styles.taskInput}>
        <input
          className={styles.input}
          type="text"
          name="task"
          id="task"
          placeholder="Plan your day..."
          autoFocus
        />
        <AddNewButton />
      </div>
    </div>
  );
};

export default TaskInput;
