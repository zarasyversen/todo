import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerHeading}>Your list of tasks</h1>
    </header>
  );
};

export default Header;
