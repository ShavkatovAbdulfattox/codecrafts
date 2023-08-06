import Section1 from "./sections/section1/Section1";
import {Qualified} from "../../components/Qualified/Qualified";
import StartSection from "../../components/Start/Start";
import Faq from "../../components/Faq/Faq";

const MainPage = () => {
    return (
        <div className="main-page">
            <StartSection/>
            <Section1/>
            {/* <div className={classes.noiseBg}></div> */}
            <Faq/>
            <Qualified/>
        </div>
    );
};

export default MainPage;
