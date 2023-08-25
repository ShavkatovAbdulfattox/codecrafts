import React, { useState } from "react";
import { useGetLeadersQuery } from "../../services/leaderboardApi";
import classes from "./LeaderBoard.module.scss";

const Leaderboard = () => {
  const { data } = useGetLeadersQuery();
  const [currentList, setCurrentList] = useState("champion");

  if (data)
    return (
      <div className="container">
        <div className={classes.mainContent}>
          {/*  */}
          <div className={classes.listButtons}>
            {Object.keys(data)
              .reverse()
              .map((key, index) => {
                return (
                  <button active={key == currentList ? "true" : "false"} onClick={() => setCurrentList(key)} key={index}>
                    {key}
                  </button>
                );
              })}
          </div>
          {/*  */}
          <div className={classes.listContainer}>
            {Object.keys(data).map((key, index) => {
              if (key == currentList) {
                return (
                  <div className={classes.listWrapper} key={index} data-champion={key == "champion"}>
                    <h3 data-title>
                      {key}
                      {key == "champion" && "s"}
                    </h3>
                    <div className={classes.listHeader}>
                      <span>No</span>
                      <div>Img</div>
                      <div>Foydalanuvchi</div>
                      <span>Ball</span>
                    </div>
                    <ul className={classes.list}>
                      {data[key].map((el, idx) => {
                        return (
                          <li key={idx} style={{ animationDelay: 0.05 * idx + "s" }}>
                            <div data-content>
                              <span data-number>{idx + 1}</span>
                              <img src={el.picture} alt="" data-picture />
                              <p data-name>{el.name}</p>
                              <span data-ball>{el.ball}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
};

export default Leaderboard;
