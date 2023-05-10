import React from "react";
import styles from "./MenuButtons.module.scss";
type Props = {
  name: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  handleClick?: () => void;
};

const MenuButtons = ({ name, bgColor, textColor, handleClick }: Props) => {
  const handleButtonClick = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      className={styles.menuButtonsDiv}
      onClick={handleButtonClick}
    >
      {name}
    </button>
  );
};

export default MenuButtons;
