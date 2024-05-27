import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaInfoCircle, FaWhatsapp } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import styles from "./icon.module.css";

const Icon = ({ type, size, color = "inherit" }) => {
  const props = {
    size: size || "100%",
    className: `${styles.icon}`,
    color,
  };
  const icons = {
    send: <RiSendPlaneLine {...props} />,
    wp: <FaWhatsapp {...props} />,
    info: <FaInfoCircle {...props} />,
    diamond: <IoDiamondOutline {...props} />,
  };
  return <i>{icons[type]}</i>;
};

export default Icon;
