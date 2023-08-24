import React from "react";
import { useGetLeadersQuery } from "../../services/leaderboardApi";
import classes from "./LeaderBoard.module.scss";

const Leaderboard = () => {
  const { data } = useGetLeadersQuery();
  console.log(data);
  if (data)
    return (
      <div className="container">
        <div className={classes.mainContent}>
          {Object.keys(data).map((key, index) => {
            return (
              <div className={classes.listWrapper} key={index}>
                <h3 data-title>{key}</h3>
                <ul className={classes.list}>
                  {data[key].map((el, idx) => {
                    return (
                      <li key={idx}>
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
          })}
        </div>
      </div>
    );
};

export default Leaderboard;
