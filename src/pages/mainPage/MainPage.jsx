import React from "react";
import classes from "./MainPage.module.scss";
import { Qualified } from "../../components/Qualified/Qualified";
import Section1 from "./sections/section1/Section1";

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
