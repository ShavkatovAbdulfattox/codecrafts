import React, { useState, useEffect } from "react";
import classes from "./Table.module.scss";
import axios from "axios";
import likePng from "../../assets/icons/thumb-up.png";
import chevronPng from "../../assets/icons/down-arrow.png";

const baseURL = "https://myleetcode-6e7d4e375979.herokuapp.com/topic/get/user/1/3";

const Table = (props) => {
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [nameState, setNameState] = useState(false);
  const [diffState, setDiffState] = useState(false);
  const [likesState, setLikesState] = useState(false);

  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseURL);
      const responseData = await response.data.data.questionList;
      setData(responseData);
      setTableData(responseData);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const diffList = {
    easy: 0,
    medium: 1,
    hard: 2,
  };

  function sortTable(bool, key, obj) {
    const cloneData = [...data];

    if (bool) {
      const ol = obj ? cloneData.sort((a, b) => obj[a[key]] - obj[b[key]]) : cloneData.sort((a, b) => a[key] - b[key]);
      setTableData(ol);
    } else {
      const ul = obj ? cloneData.sort((a, b) => obj[b[key]] - obj[a[key]]) : cloneData.sort((a, b) => b[key] - a[key]);
      setTableData(ul);
    }
  }

  return (
    <div className={classes.tableWrapper}>
      <div className={classes.tableSorter}>
        <div className={`${classes.tableInfo} ${classes.tableStatus}`}>Status</div>
        <div
          className={`${classes.tableInfo} ${classes.tableTitle}`}
          onClick={() => {
            setDiffState(false);
            setLikesState(false);
            setNameState(!nameState);
            sortTable(nameState, "id");
          }}
        >
          Title
          <img src={chevronPng} alt="" className={classes.chevron} draggable="false" data-selected={nameState} />
        </div>
        <div
          className={`${classes.tableInfo} ${classes.tableDifficulty}`}
          onClick={() => {
            setNameState(false);
            setLikesState(false);
            setDiffState(!diffState);
            sortTable(diffState, "level", diffList);
          }}
        >
          Difficulty
          <img src={chevronPng} alt="" className={classes.chevron} draggable="false" data-selected={diffState} />
        </div>
        <div
          className={`${classes.tableInfo} ${classes.tableLiked}`}
          onClick={() => {
            setNameState(false);
            setDiffState(false);
            setLikesState(!likesState);
            sortTable(likesState, "like1");
          }}
        >
          Likes
          <img src={chevronPng} alt="" className={classes.chevron} draggable="false" data-selected={likesState} />
        </div>
      </div>

      <div className={classes.table}>
        {tableData
          ? tableData.map((item, index) => {
              return (
                <div key={index} className={classes.tableData} data-bg={index % 2 == 0 ? "0" : "1"}>
                  {/*  */}
                  <div className={`${classes.tableColumn} ${classes.status}`}>
                    <div data-solved={item.solved}></div>
                  </div>

                  <div className={`${classes.tableColumn} ${classes.title}`}>
                    <p>{`${item.id}. ${item.name}`}</p>
                  </div>

                  <div className={`${classes.tableColumn} ${classes.difficulty}`} data-diff={item.level}>
                    <span>{item.level}</span>
                  </div>

                  <div className={`${classes.tableColumn} ${classes.likesWrapper}`}>
                    <div className={classes.likeBtn} data-like="true">
                      <img
                        src={likePng}
                        alt=""
                        draggable="false"
                        data-pressed={likes.includes(index) ? "true" : "false"}
                        onClick={() => {
                          !likes.includes(index)
                            ? (setLikes([...likes, index]), setDislikes(dislikes.filter((e) => e !== index)))
                            : setLikes(likes.filter((e) => e !== index));
                        }}
                      />
                      <span>{!likes.includes(index) ? item.like1 : item.like1 + 1}</span>
                    </div>
                    <div className={classes.likeBtn} data-dislike="true">
                      <img
                        src={likePng}
                        alt=""
                        draggable="false"
                        data-pressed={dislikes.includes(index) ? "true" : "false"}
                        onClick={() => {
                          !dislikes.includes(index)
                            ? (setDislikes([...dislikes, index]), setLikes(likes.filter((e) => e !== index)))
                            : setDislikes(dislikes.filter((e) => e !== index));
                        }}
                      />
                      <span>{!dislikes.includes(index) ? item.dislike : item.dislike + 1}</span>
                    </div>
                  </div>
                  {/*  */}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Table;
