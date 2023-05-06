import React from "react";
import styles from "./NoBorderButtons.module.scss";
type Props = {
  name?: React.ReactNode;
  textColor?: string;
};

const NoBorderButtons = ({ name, textColor }: Props) => {
  return (
    <button style={{ color: textColor }} className={styles.noBorderButtonsDiv}>
      {name}
    </button>
  );
};

export default NoBorderButtons;
