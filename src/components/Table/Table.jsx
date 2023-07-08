import React, { useState } from "react";
import classes from "./Table.module.scss";

const Table = (props) => {
  const [data, setData] = useState([...props.data]);
  const [diffState, setDiffState] = useState(true);

  return (
    <div className={classes.tableWrapper}>
      <div className={classes.tableSorter}>
        <div className={`${classes.tableInfo} ${classes.tableStatus}`}>Status</div>
        <div
          className={`${classes.tableInfo} ${classes.tableTitle}`}
          onClick={() => {
            setData([...props.data.reverse()]);
          }}
        >
          Title
        </div>
        <div
          className={`${classes.tableInfo} ${classes.tableDifficulty}`}
          onClick={() => {
            setDiffState(!diffState);
            diffState ? setData([...data.sort((a, b) => a.difficulty - b.difficulty)]) : setData([...props.data]);
          }}
        >
          Difficulty
        </div>
      </div>

      <div className={classes.table}>
        {data
          ? data.map((item, index) => {
              return (
                <div key={index} className={classes.tableData} data-bg={index % 2 == 0 ? "0" : "1"}>
                  <div className={`${classes.tableColumn} ${classes.status}`}>
                    <div data-solved={item.status}></div>
                  </div>
                  <div className={`${classes.tableColumn} ${classes.title}`}>
                    <p>{`${item.id + 1}. ${item.title}`}</p>
                  </div>
                  <div className={`${classes.tableColumn} ${classes.difficulty}`} data-diff={item.difficulty}>
                    <span>{item.difficulty == 0 ? "Easy" : item.difficulty == 1 ? "Medium" : "Hard"}</span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Table;
