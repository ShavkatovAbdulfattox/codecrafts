import { useEffect, useRef, useState } from "react";
import classes from "./Navigation.module.scss";

import { NavLink, useNavigate } from "react-router-dom";

import firePng from "../../assets/icons/fire.png";
import bellPng from "../../assets/icons/notification.png";
import userPng from "../../assets/icons/user.png";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine, RiProfileLine, RiUserSettingsLine } from "react-icons/ri";
import { Button } from "antd";
import { removeToken } from "../../utils/functions.js";
import { Logo } from "../../utils/icons";
// import {RiUserSettingsLine}

const Navigation = () => {
    const isLogged = useSelector((state) => state.user.isLogged);
    const [isHover, setIsHover] = useState(false);
    const [menu, setMenu] = useState(false);

    const naigate = useNavigate();

    const data = {
        links: [
            { title: "Asosiy", linkTo: "/" },
            { title: "Muammolar", linkTo: "/problemslist" },
            { title: "Intervyu", linkTo: "/interwiew" },
            { title: "Leaderboard", linkTo: "/leaderboard" },
            // {title: "Contest", linkTo: "/p"},
            // {title: "Discuss", linkTo: "/p"},
        ],
    };

    const navlink = useRef([]);

    const indicator = useRef();
    const navigate = useNavigate();

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


    const logOut = () => {
        removeToken()
        naigate("/login")
    }

    return (
        <nav className={classes.nav}>
            <div className="container">
                <div className={classes.navContent}>
                    <div className={classes.navLeft}>
                        <NavLink
                            className={`${classes.navLogo} font-Lexend flex gap-3 items-center`}
                            onClick={() => indicateLink(0)}
                            to="/">
                            CodeCrafters
                            <Logo />
                        </NavLink>
                        <div className={classes.navListWrapper}>
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
                    </div>

                    {isLogged ? (
                        <div className={`${classes.navRight} `}>
                            <motion.button whileTap={{ scale: 0.8 }} className={`${classes.navIcon}`}>
                                <img src={firePng} alt="" />
                            </motion.button>
                            <motion.button whileTap={{ scale: 0.8 }} className={classes.navIcon}>
                                <img src={bellPng} alt="" />
                            </motion.button>
                            <div
                                className={`relative ${isHover ? "bg-slate-950" : ""}  p-3 -m-3  rounded-t-3xl`}
                                onClick={() => {
                                    setIsHover(!isHover);
                                }}
                            >
                                <motion.button whileTap={{ scale: 0.8 }} className={`${classes.navIcon}`}>
                                    <img src={userPng} alt="" />
                                </motion.button>
                                {isHover && (
                                    <div className="absolute top-10 right-0  w-52 ">
                                        <motion.p
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                navigate("/profile");
                                                setIsHover(false);
                                            }}
                                            className="text-white font-Lexend flex items-center gap-2 text-sm cursor-pointer bg-slate-950 rounded-tl-xl hover:bg-slate-900 w-full p-3"
                                        >
                                            <RiProfileLine className="text-xl" /> Profilni korish
                                        </motion.p>

                                        <motion.p
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                navigate("/profilesettings");
                                                setIsHover(false);
                                            }}
                                            className="text-white font-Lexend flex items-center gap-2 text-sm cursor-pointer bg-slate-950 hover:bg-slate-900 w-full p-3"
                                        >
                                            <RiUserSettingsLine className="text-xl" /> Profil sozlamalari
                                        </motion.p>
                                        <motion.p
                                            whileTap={{ scale: 0.95 }}
                                            className="text-white font-Lexend flex items-center gap-2 text-sm cursor-pointer bg-slate-950 hover:bg-slate-900 w-full p-3"
                                        //  onClick={()=> }2
                                        >
                                            <RiLogoutCircleRLine className="text-xl" />
                                            <Button onClick={logOut}>Chiqish</Button>
                                        </motion.p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex">
                            <button className="text-black font-Karla text-base rounded bg-white border-solid py-1 px-4"
                                onClick={() => navigate("/login")}>
                                Kirish
                            </button>
                            <button
                                className="text-white font-Karla text-base rounded bg-red-400 border-solid py-1 px-4 ml-3 hover:opacity-80"
                                onClick={() => navigate("/signup")}
                            >
                                Regestratsiya
                            </button>
                        </div>
                    )}
                </div>

                {/* *********************************** */}

                <div className={classes.navContentMobile}>
                    <svg viewBox="0 0 24 24" className={classes.burgerIcon} onClick={() => setMenu(true)}>
                        <path fillRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>

                    <NavLink onClick={() => indicateLink(0)} to="/"
                        className={`${classes.navLogo} font-Lexend flex gap-3 items-center`}>
                        CodeCrafters
                        <Logo />
                    </NavLink>

                    <svg viewBox="0 0 24 24" className={classes.userIcon}>
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
                        ></path>
                    </svg>

                    {/* ****** */}

                    <div className={classes.menu} data-menu-open={menu ? "true" : "false"}>
                        <div className={classes.menuUser}>
                            <img src="https://s3-us-west-1.amazonaws.com/s3-lc-upload/assets/default_avatar.jpg"
                                alt="" />
                            <p>Anonymous</p>
                        </div>

                        <div className={classes.menuList}>
                            <p>Quick Links</p>
                            <ul>
                                {data.links.map((elem, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={elem.linkTo}
                                                className={classes.menuLink}
                                                draggable="false"
                                                onClick={() => setMenu(false)}
                                            >
                                                {elem.title}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className={classes.menuBg} onClick={() => setMenu(false)}
                        data-menu-open={menu ? "true" : "false"}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
