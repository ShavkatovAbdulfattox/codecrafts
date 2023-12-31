import React, { useEffect, useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useGetUserInformationQuery } from "../../../../services/userProfileApi";
import { useSelector } from "react-redux";
function Solved() {
  const { userData } = useSelector((state) => state.user);
  const { data, isLoading } = useGetUserInformationQuery(userData.id);
  const initialState = [
    {
      level: "easy",
      total: !isLoading ? data.countEasy : 0,
      solved: !isLoading
        ? data.solvedEasyAlgorithm + data.solvedEasyDatabase
        : 0,
      color: "green",
    },
    {
      level: "medium",
      total: !isLoading ? data.countMedium : 0,
      solved: !isLoading
        ? data.solvedMediumAlgorithm + data.solvedMediumDatabase
        : 0,
      color: "yellow",
    },
    {
      level: "hard",
      total: !isLoading ? data.countHard : 0,
      solved: !isLoading
        ? data.solvedHardAlgorithm + data.solvedHarDatabase
        : 0,
      color: "red",
    },
  ];

  const totalQuestion = !isLoading
    ? data.countEasy + data.countMedium + data.countHard
    : 0;
  const totalSolved = !isLoading
    ? data.solvedEasyAlgorithm +
      data.solvedEasyDatabase +
      data.solvedMediumAlgorithm +
      data.solvedMediumDatabase +
      data.solvedHardAlgorithm +
      data.solvedHarDatabase
    : 0;
  console.log(totalQuestion, totalSolved);
  const [problemLevels, setProblemLevels] = useState(initialState);
  useEffect(() => {
    setProblemLevels(initialState);
  }, [isLoading]);

  return (
    <section
      className="basis-1/2 rounded-md py-5 px-4"
      style={{
        backgroundColor: "rgb(40 40 40)",
      }}
    >
      <h2 className="font-Karla text-gray-300">Solved Problems</h2>
      <div className="flex justify-between mt-3">
        <div className="flex-1 my-auto ">
          <div className="h-[120px] w-[120px]">
            {/* // ! Circular prograssbar */}
            <CircularProgressbarWithChildren
              value={0}
              styles={buildStyles({
                pathColor: `#FFA500`, // Set your desired color here
              })}
            >
              <p className="text-2xl font-Lexend">{totalSolved}</p>
              <p className="text-gray-400">Solved</p>
            </CircularProgressbarWithChildren>
          </div>
        </div>

        <div className="flex flex-col gap-3 basis-[214px]">
          {problemLevels.map(({ level, total, solved, color }, id) => {
            const width = (100 / total) * solved;
            const possibilities = [
              "bg-green-500",
              "bg-green-600",
              "bg-yellow-500",
              "bg-yellow-600",
              "bg-red-500",
              "bg-red-600",
            ];
            return (
              <div className="flex flex-col gap-2 my-1" key={id + "level"}>
                <div className="flex items-center">
                  <p className="text-[12px] font-Karla text-stone-400 w-[53px] capitalize">
                    {level}
                  </p>
                  <p className="font-Lexend text-white flex items-center gap-1 flex-1">
                    {solved}
                    <span className="text-sm">/</span>
                    <span className="text-[12px] text-gray-400">{total}</span>
                  </p>
                  <p className="text-[12px] font-Karla text-stone-400">
                    Not enough data
                  </p>
                </div>
                <div className="w-full relative ">
                  <div
                    className={`bg-${color}-500 absolute  block h-1 opacity-25 w-full`}
                  ></div>
                  <div
                    className={`bg-${color}-600 h-1 absolute block`}
                    style={{ width: `${50}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solved;
