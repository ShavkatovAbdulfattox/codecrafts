import React, { useEffect, useRef, useState } from "react";
import classes from "./Navigation.module.scss";

import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

import bellPng from "../../assets/icons/notification.png";
import userPng from "../../assets/icons/user.png";
import firePng from "../../assets/icons/fire.png";

const Navigation = () => {
  const data = {
    links: [
      { title: "Explore", linkTo: "/" },
      { title: "Problem", linkTo: "/problem" },
      { title: "Interview", linkTo: "/p" },
      { title: "Contest", linkTo: "/p" },
      { title: "Discuss", linkTo: "/p" },
    ],
  };

  const navlink = useRef([]);

  const indicator = useRef();

  const setNavlink = (e) => {
    e && !navlink.current.includes(e) ? navlink.current.push(e) : null;
  };

  const indicateLink = (index) => {
    indicator.current.style.transform = `translateX(${navlink.current[index].offsetLeft}px)`;
    indicator.current.style.width = `${navlink.current[index].getBoundingClientRect().width}px`;
    indicator.current.style.transition = "0.3s";
  };

  useEffect(() => {
    navlink.current.forEach((elem, index) => {
      elem.classList.contains("active") ? indicateLink(index) : null;
    });
  }, []);

  const activeLink = (idx) => {
    console.log(idx);
  };

  return (
    <nav className={classes.nav}>
      <div className="container">
        <div className={classes.navContent}>
          {/*  */}
          <div className={classes.navLeft}>
            <NavLink to="/" className={classes.navLogo}>
              CodeXbirbalo
            </NavLink>
            <ul className={classes.navList}>
              {data.links.map((elem, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={elem.linkTo}
                      className={classes.navLink}
                      draggable="false"
                      ref={setNavlink}
                      onClick={() => indicateLink(index)}
                    >
                      {elem.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className={classes.indicator} ref={indicator}></div>
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
