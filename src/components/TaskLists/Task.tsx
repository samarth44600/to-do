"use client";
import React from "react";
import styles from "./TaskLists.module.scss";
import MenuButtons from "../Buttons/MenuButtons/MenuButtons";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  setCompleted,
  setImportant,
} from "@/redux/slices/taskSlice";

type Props = {
  id: number;
  description: string;
  isCompleted?: boolean;
  isImportant?: boolean;
};

const Task = ({ id, description, isCompleted, isImportant }: Props) => {
  const dispatch = useDispatch();

  const handleEdit = (id: number) => {
    console.log("edit id ", id);
  };

  const handleComplete = (id: number) => {
    console.log("complete id ", id);
    dispatch(setCompleted(id));
  };

  const handleImportant = (id: number) => {
    console.log("important id ", id);
    dispatch(setImportant(id));
  };

  const handleDelete = (id: number) => {
    console.log("delete id ", id);
    dispatch(deleteTask(id));
  };
  return (
    <div
      className={`${styles.taskDiv}  ${isCompleted && styles.completed} ${
        isImportant && styles.important
      }`}
    >
      <div className={styles.task}>
        <p className={styles.taskText}>{description}</p>
      </div>
      <div className={styles.taskMenu}>
        <button
          className={`${styles.menuButtonsDiv}`}
          onClick={() => handleEdit(id)}
        >
          <Icon icon="material-symbols:edit-outline" />
        </button>
        <button
          className={styles.menuButtonsDiv}
          onClick={() => handleComplete(id)}
        >
          <Icon icon="charm:tick-double" />
        </button>

        <button
          className={styles.menuButtonsDiv}
          onClick={() => handleImportant(id)}
        >
          <Icon icon="ic:round-star-border" />
        </button>

        <button
          className={styles.menuButtonsDiv}
          onClick={() => handleDelete(id)}
        >
          <Icon icon="ic:outline-delete-forever" />
        </button>
      </div>
    </div>
  );
};

export default Task;
