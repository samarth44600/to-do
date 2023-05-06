import React from "react";
import styles from "./LandingPage.module.scss";
import TaskInput from "../TaskInput/TaskInput";
type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className={styles.landingPageDiv}>
      <TaskInput />
    </div>
  );
};

export default LandingPage;
