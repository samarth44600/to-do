"use client";
import React from "react";
import styles from "./TaskInput.module.scss";
import AddNewButton from "../Buttons/AddNewButton/AddNewButton";
import { useDispatch } from "react-redux";
import { addTask } from "@/redux/slices/taskSlice";
type Props = {};

const TaskInput = (props: Props) => {
  const dispatch = useDispatch();
  // const {}
  const [newTask, setNewTask] = React.useState("");
  const data = {
    id: 0,
    description: newTask,
    isCompleted: false,
    isImportant: false,
  };
  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask(data));
    console.log("task submitted", data);
    setNewTask("");
  };
  return (
    <div className={styles.taskInputDiv}>
      <form onSubmit={handleTaskSubmit} className={styles.taskInput}>
        <input
          className={styles.input}
          type="text"
          name="task"
          id="task"
          placeholder="Plan your day..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          autoFocus
        />
        <AddNewButton type="submit" />
      </form>
    </div>
  );
};

export default TaskInput;
