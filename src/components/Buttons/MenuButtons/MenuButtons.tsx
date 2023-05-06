import React from "react";
import styles from "./MenuButtons.module.scss";
type Props = {
  name: React.ReactNode;
  bgColor?: string;
  textColor?: string;
};

const MenuButtons = ({ name, bgColor, textColor }: Props) => {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      className={styles.menuButtonsDiv}
    >
      {name}
    </button>
  );
};

export default MenuButtons;
