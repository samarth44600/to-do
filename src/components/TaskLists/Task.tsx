import React from "react";
import styles from "./TaskLists.module.scss";
import MenuButtons from "../Buttons/MenuButtons/MenuButtons";

type Props = {};

const Task = (props: Props) => {
  return (
    <div className={styles.taskDiv}>
      <div className={styles.task}>
        <span className={styles.taskText}>Task 1</span>
      </div>
      <div className={styles.taskMenu}>
        <MenuButtons name="Completed" />
        <MenuButtons name="Completed" />
        <MenuButtons name="Completed" />
      </div>
    </div>
  );
};

export default Task;
