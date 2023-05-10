"use client";
import React from "react";
import styles from "./TaskLists.module.scss";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "@/redux/slices/taskSlice";
type Props = {};

const TaskLists = (props: Props) => {
  const { task, completedTask } = useSelector((state: any) => state.task);

  console.log("task", task);
  return (
    <div className={styles.tasksListDiv}>
      <>
        {task != 0 ? (
          task.map((data: any, index: number) => <Task key={index} {...data} />)
        ) : (
          <div className={styles.noTaskDiv}>
            <p className={styles.noTaskText}>No task added yet</p>
          </div>
        )}
      </>
      <>
        {completedTask != 0
          ? completedTask.map((data: any, index: number) => (
              <Task key={index} {...data} />
            ))
          : null}
      </>
    </div>
  );
};

export default TaskLists;
