"use client";
import React from "react";
import styles from "./TaskLists.module.scss";
import MenuButtons from "../Buttons/MenuButtons/MenuButtons";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { deleteTask } from "@/redux/slices/taskSlice";

type Props = {
  id: number;
  description: string;
  isCompleted?: boolean;
  isImportant?: boolean;
};

const Task = ({ id, description, isCompleted, isImportant }: Props) => {
  const dispatch = useDispatch();

  const handleEdit = (id: number) => {
    console.log("edit");
  };

  const handleComplete = (id: number) => {
    console.log("complete");
  };

  const handleImportant = (id: number) => {
    console.log("important");
  };

  const handleDelete = (id: number) => {
    console.log("delete");
    dispatch(deleteTask(id));
  };
  return (
    <div className={styles.taskDiv}>
      <div className={styles.task}>
        <p className={styles.taskText}>{description}</p>
      </div>
      <div className={styles.taskMenu}>
        <button
          className={styles.menuButtonsDiv}
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
