import classes from "./MainPage.module.scss";
import Section1 from "./sections/section1/Section1";
import { Qualified } from "../../components/Qualified/Qualified";
import Start from "../../components/Start/Start";
import Table from "../../components/Table/Table";

const MainPage = () => {
  return (
    <div>
      <Start />
      <Section1 />
      <div className={classes.noiseBg}></div>
      <Qualified />
      <div className="container">
        <Table data={tableData} />
      </div>
    </div>
  );
};

const tableData = [
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "no", title: "Write a function that makes you a web developer", level: "medium" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "hard" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "no", title: "Write a function that makes you a web developer", level: "medium" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "hard" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "no", title: "Write a function that makes you a web developer", level: "hard" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "no", title: "Write a function that makes you a web developer", level: "medium" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "no", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "hard" },
  { solved: "no", title: "Write a function that makes you a web developer", level: "medium" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "no", title: "Write a function that makes you a web developer", level: "medium" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "no", title: "Write a function that makes you a web developer", level: "medium" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "hard" },
  { solved: "no", title: "Write a function that makes you a web developer", level: "hard" },
  { solved: "yes", title: "Write a function that makes you a web developer", level: "easy" },
];

tableData.forEach((e, i) => (e.id = i));

export default MainPage;
