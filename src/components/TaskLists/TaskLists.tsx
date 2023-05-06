import React from "react";
import styles from "./TaskLists.module.scss";
import Task from "./Task";
type Props = {};

const TaskLists = (props: Props) => {
  return (
    <div className={styles.tasksListDiv}>
      <div className={styles.taskDiv}>
        <Task />
      </div>
    </div>
  );
};

export default TaskLists;