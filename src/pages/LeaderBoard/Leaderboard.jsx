import React, { useState } from "react";
import { useGetLeadersQuery } from "../../services/leaderboardApi";
import classes from "./LeaderBoard.module.scss";
import { baseURL } from "../../constants/apiConstants";

const Leaderboard = () => {
  const { data } = useGetLeadersQuery();
  const [currentList, setCurrentList] = useState("champion");
  const pictureUrl = baseURL + `/api/image/`;

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
              return (
                <div className={classes.listWrapper} key={index} data-champion={key == "champion"} style={{display: key == currentList ? 'block' : 'none'}}>
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
                            <div data-picture>
                              <img src={pictureUrl + el.picture} alt="" onLoad={(e) => e.target.setAttribute("data-loaded", "true")} />
                            </div>
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
      </div>
    );
};

export default Leaderboard;
