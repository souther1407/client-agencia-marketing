import React from "react";
import Icon from "../../atoms/Icon/Icon";
import styles from "./iconButton.module.css";

const IconButton = React.forwardRef(
  ({ icon, size = "16px", color, onClick, ...buttonProps }, ref) => {
    return (
      <button
        ref={ref}
        {...buttonProps}
        onClick={onClick}
        className={styles.iconButton}
      >
        <Icon type={icon} size={size} color={color} />
      </button>
    );
  }
);

export default IconButton;
