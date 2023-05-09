"use client";
import React from "react";
import styles from "./TaskLists.module.scss";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "@/redux/slices/taskSlice";
type Props = {};

const TaskLists = (props: Props) => {
  const { task } = useSelector((state: any) => state.task);

  console.log("task", task);
  return (
    <div className={styles.tasksListDiv}>
      {task.map((data: any, index: number) => (
        <Task key={index} {...data} />
      ))}
    </div>
  );
};

export default TaskLists;
