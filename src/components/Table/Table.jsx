import React, { useEffect, useState } from "react";
import chevronPng from "../../assets/icons/down-arrow.png";
import likePng from "../../assets/icons/thumb-up.png";
import classes from "./Table.module.scss";

const Table = () => {
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [nameState, setNameState] = useState(false);
  const [diffState, setDiffState] = useState(false);
  const [likesState, setLikesState] = useState(false);

  const fetchData = async () => {
    // const response = await axios.get(baseURL);
    // const responseData = await response.data.data.questionList;
    // console.log(response);
    setData([...tempData]);
    setTableData([...tempData]);
  };

  useEffect(() => {
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
      const ol = obj
        ? cloneData.sort((a, b) => obj[a[key]] - obj[b[key]])
        : cloneData.sort((a, b) => a[key] - b[key]);
      setTableData(ol);
    } else {
      const ul = obj
        ? cloneData.sort((a, b) => obj[b[key]] - obj[a[key]])
        : cloneData.sort((a, b) => b[key] - a[key]);
      setTableData(ul);
    }
  }

  function setItemDislike(i) {
    const indexOfItem = tableData.findIndex((item) => item.id == i);
    const copyTableData = [...tableData];
    const foundItem = copyTableData[indexOfItem];
    foundItem.likeStatus == "disliked"
      ? (foundItem.likeStatus = "")
      : (foundItem.likeStatus = "disliked");
    setTableData(copyTableData);
  }

  function setItemLike(i) {
    const indexOfItem = tableData.findIndex((item) => item.id == i);
    const copyTableData = [...tableData];
    const foundItem = copyTableData[indexOfItem];
    foundItem.likeStatus == "liked"
      ? (foundItem.likeStatus = "")
      : (foundItem.likeStatus = "liked");
    setTableData(copyTableData);
  }

  return (
    <div className={classes.tableWrapper}>
      <div className={classes.tableSorter}>
        <div className={`${classes.tableInfo} ${classes.tableStatus}`}>
          Status
        </div>
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
          <img
            src={chevronPng}
            alt=""
            className={classes.chevron}
            draggable="false"
            data-selected={nameState}
          />
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
          <img
            src={chevronPng}
            alt=""
            className={classes.chevron}
            draggable="false"
            data-selected={diffState}
          />
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
          <img
            src={chevronPng}
            alt=""
            className={classes.chevron}
            draggable="false"
            data-selected={likesState}
          />
        </div>
      </div>

      <div className={classes.table}>
        {tableData
          ? tableData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classes.tableData}
                  data-bg={index % 2 == 0 ? "0" : "1"}
                >
                  {/*  */}
                  <div className={`${classes.tableColumn} ${classes.status}`}>
                    <div data-solved={item.solved}></div>
                  </div>

                  <div className={`${classes.tableColumn} ${classes.title}`}>
                    <p>{`${item.id}. ${item.name}`}</p>
                  </div>

                  <div
                    className={`${classes.tableColumn} ${classes.difficulty}`}
                    data-diff={item.level}
                  >
                    <span>{item.level}</span>
                  </div>

                  <div
                    className={`${classes.tableColumn} ${classes.likesWrapper}`}
                  >
                    <div className={classes.likeBtn} data-like="true">
                      <img
                        src={likePng}
                        alt=""
                        draggable="false"
                        data-pressed={
                          item.likeStatus == "liked" ? "true" : "false"
                        }
                        onClick={() => {
                          setItemLike(item.id);
                        }}
                      />
                      <span>
                        {item.likeStatus == "liked"
                          ? item.like1 + 1
                          : item.like1}
                      </span>
                    </div>
                    <div className={classes.likeBtn} data-dislike="true">
                      <img
                        src={likePng}
                        alt=""
                        draggable="false"
                        data-pressed={
                          item.likeStatus == "disliked" ? "true" : "false"
                        }
                        onClick={() => {
                          setItemDislike(item.id);
                        }}
                      />
                      <span>
                        {item.likeStatus == "disliked"
                          ? item.dislike + 1
                          : item.dislike}
                      </span>
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

const tempData = [
  {
    id: 1,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 2433,
    dislike: 100,
    likeStatus: "liked",
  },
  {
    id: 2,
    solved: "no",
    name: "Write a function that makes you a web developer",
    level: "medium",
    like1: 5466,
    dislike: 1026,
    likeStatus: "liked",
  },
  {
    id: 3,
    solved: "tried",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 6544,
    dislike: 850,
    likeStatus: "disliked",
  },
  {
    id: 4,
    solved: "tried",
    name: "Write a function that makes you a web developer",
    level: "hard",
    like1: 556,
    dislike: 286,
    likeStatus: "liked",
  },
  {
    id: 5,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 4685,
    dislike: 456,
    likeStatus: "disliked",
  },
  {
    id: 6,
    solved: "tried",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 3220,
    dislike: 233,
    likeStatus: "liked",
  },
  {
    id: 7,
    solved: "no",
    name: "Write a function that makes you a web developer",
    level: "medium",
    like1: 3554,
    dislike: 875,
    likeStatus: "",
  },
  {
    id: 8,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "hard",
    like1: 816,
    dislike: 180,
    likeStatus: "liked",
  },
  {
    id: 9,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 4236,
    dislike: 329,
    likeStatus: "liked",
  },
  {
    id: 10,
    solved: "no",
    name: "Write a function that makes you a web developer",
    level: "hard",
    like1: 1210,
    dislike: 2653,
    likeStatus: "disliked",
  },
  {
    id: 11,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 686,
    dislike: 52,
    likeStatus: "liked",
  },
  {
    id: 12,
    solved: "no",
    name: "Write a function that makes you a web developer",
    level: "medium",
    like1: 2255,
    dislike: 300,
    likeStatus: "",
  },
  {
    id: 13,
    solved: "tried",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 8569,
    dislike: 1216,
    likeStatus: "liked",
  },
  {
    id: 14,
    solved: "no",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 6573,
    dislike: 896,
    likeStatus: "liked",
  },
  {
    id: 15,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "hard",
    like1: 421,
    dislike: 325,
    likeStatus: "liked",
  },
  {
    id: 16,
    solved: "no",
    name: "Write a function that makes you a web developer",
    level: "medium",
    like1: 3555,
    dislike: 322,
    likeStatus: "disliked",
  },
  {
    id: 17,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 3748,
    dislike: 650,
    likeStatus: "",
  },
  {
    id: 18,
    solved: "no",
    name: "Write a function that makes you a web developer",
    level: "medium",
    like1: 2512,
    dislike: 400,
    likeStatus: "liked",
  },
  {
    id: 19,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 7522,
    dislike: 1562,
    likeStatus: "disliked",
  },
  {
    id: 20,
    solved: "tried",
    name: "Write a function that makes you a web developer",
    level: "medium",
    like1: 1856,
    dislike: 365,
    likeStatus: "liked",
  },
  {
    id: 21,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 5542,
    dislike: 500,
    likeStatus: "",
  },
  {
    id: 22,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "hard",
    like1: 755,
    dislike: 202,
    likeStatus: "",
  },
  {
    id: 23,
    solved: "no",
    name: "Write a function that makes you a web developer",
    level: "hard",
    like1: 844,
    dislike: 488,
    likeStatus: "liked",
  },
  {
    id: 24,
    solved: "yes",
    name: "Write a function that makes you a web developer",
    level: "easy",
    like1: 2865,
    dislike: 120,
    likeStatus: "liked",
  },
];
