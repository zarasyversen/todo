import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // Fix as NavLink current class isn't working for me otherwise
  const isActive = (path, match, location) =>
    !!(match || path === location.pathname);

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ];

  return (
    <nav className={styles.navBar}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={styles.navBar__link}
                activeClassName="navBar__link--active"
                isActive={isActive.bind(this, link.path)}
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
