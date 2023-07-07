import classes from "./MainPage.module.scss";
import { Qualified } from "../../components/Qualified/Qualified";
import Section1 from "./sections/section1/Section1";
import Start from "../../components/Start/Start";

const MainPage = () => {
  return (
    <div>
      <Start />
      <Section1 />
      <div className={classes.noiseBg}></div>
      <Qualified />
    </div>
  );
};

export default MainPage;
