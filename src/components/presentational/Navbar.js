import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
      isExact: true,
    },
    {
      id: 2,
      path: "/about",
      text: "About",
      isExact: false,
    },
  ];

  return (
    <nav className={styles.navBar}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              {link.isExact && (
                <NavLink
                  exact
                  to={link.path}
                  className={styles.navBar__link}
                  activeClassName={styles.navBar__linkActive}
                >
                  {link.text}
                </NavLink>
              )}
              {!link.isExact && (
                <NavLink
                  to={link.path}
                  className={styles.navBar__link}
                  activeClassName={styles.navBar__linkActive}
                >
                  {link.text}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
