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
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 1, title: "Write a function that makes you a web developer", difficulty: 1 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 1, title: "Write a function that makes you a web developer", difficulty: 1 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 1 },
  { status: 1, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 1, title: "Write a function that makes you a web developer", difficulty: 2 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 1, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 2 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 1, title: "Write a function that makes you a web developer", difficulty: 1 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 1 },
  { status: 1, title: "Write a function that makes you a web developer", difficulty: 0 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 2 },
  { status: 1, title: "Write a function that makes you a web developer", difficulty: 1 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 2 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 2 },
  { status: 1, title: "Write a function that makes you a web developer", difficulty: 1 },
  { status: 0, title: "Write a function that makes you a web developer", difficulty: 1 },
];

tableData.forEach((e, i) => (e.id = i));

export default MainPage;
