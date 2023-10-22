import { useState } from "react";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ isOpen = false }) => {
  return (
    <div className={`${styles.hamburgerMenu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.hamburger}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
