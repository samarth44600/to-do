import React from "react";
import styles from "./LandingPage.module.scss";
import TaskInput from "../TaskInput/TaskInput";
import TaskLists from "../TaskLists/TaskLists";
type Props = {};

const LandingPage = (props: Props) => {
  
  return (
    <div className={styles.landingPageDiv}>
      <TaskInput />
      <TaskLists />
    </div>
  );
};

export default LandingPage;
