"use client";
import React from "react";
import styles from "./TaskLists.module.scss";
import MenuButtons from "../Buttons/MenuButtons/MenuButtons";
import { Icon } from "@iconify/react";

type Props = {
  task: any;

};

const Task = ({task}: Props) => {
  return (
    <div className={styles.taskDiv}>
      <div className={styles.task}>
        <p className={styles.taskText}>{task}</p>
      </div>
      <div className={styles.taskMenu}>
        <MenuButtons name={<Icon icon="material-symbols:edit-outline" />} />
        <MenuButtons  name={<Icon icon="charm:tick-double" />} />
        <MenuButtons
        //   bgColor="blue"
          name={<Icon icon="ic:round-star-border" />}
        />
        <MenuButtons
        //   bgColor="red"
          name={<Icon icon="ic:outline-delete-forever" />}
        />
      </div>
    </div>
  );
};

export default Task;
