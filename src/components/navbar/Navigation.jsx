import React from "react";
import classes from "./Navigation.module.scss";

import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

import bellPng from "../../assets/icons/notification.png";
import userPng from "../../assets/icons/user.png";
import firePng from "../../assets/icons/fire.png";

const Navigation = () => {
  const data = {
    links: [
      { title: "Explore", linkTo: "/" },
      { title: "Dashboard", linkTo: "/dashboard" },
      { title: "Interview", linkTo: "/" },
      { title: "Contest", linkTo: "/" },
      { title: "Discuss", linkTo: "/" },
    ],
  };

  return (
    <nav className={classes.nav}>
      <div className="container">
        <div className={classes.navContent}>
          {/*  */}
          <div className={classes.navLeft}>
            <NavLink to="/" className={classes.navLogo}>
              WTF
            </NavLink>
            <ul className={classes.navList}>
              {data.links.map((elem, index) => {
                return (
                  <li key={index}>
                    <NavLink to={elem.linkTo} className={classes.navLink} draggable="false">
                      {elem.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={classes.navRight}>
            <button className={classes.navIcon}>
              <img src={firePng} alt="" />
            </button>
            <button className={classes.navIcon}>
              <img src={bellPng} alt="" />
            </button>
            <button className={classes.navIcon}>
              <img src={userPng} alt="" />
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
