import React from "react";
import classes from "./MainPage.module.scss";
import { Qualified } from "../../components/Qualified/Qualified";
import Section1 from "./sections/section1/Section1";
import Start from "../../components/Start/Start";
import Faq from "../../components/Faq/Faq";

const MainPage = () => {
  return (
    <div>
      <Start />
      <Section1 />
      <div className={classes.noiseBg}></div>
      <Faq />
      <Qualified />
    </div>
  );
};

export default MainPage;
