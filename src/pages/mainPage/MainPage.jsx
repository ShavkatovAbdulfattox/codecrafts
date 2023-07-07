import React from "react";
import classes from "./MainPage.module.scss";
import Section1 from "./sections/section1/section1";
import { Qualified } from "../../components/Qualified/Qualified";

const MainPage = () => {
  return (
    <div>
      <Qualified />
      <Section1 />
      <div className={classes.noiseBg}></div>
    </div>
  );
};

export default MainPage;
