import React from "react";
import { NavLink, useRouteMatch, Route } from "react-router-dom";
import Start from "./AboutPages/Start";
import SinglePage from "./AboutPages/SinglePage";

const About = () => {
  const { url, path } = useRouteMatch();

  return (
    <div className="about-page">
      <aside>
        <nav aria-label="Navigation for about page">
          <ul>
            <li>
              <NavLink to={`${url}`} activeClassName="active" exact>Start</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/about-app`} activeClassName="active">About App</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/about-author`} activeClassName="active">About Author</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <Route path={`${path}`} exact>
        <Start />
      </Route>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  );
};

export default About;
