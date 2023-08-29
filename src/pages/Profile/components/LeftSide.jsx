import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetUserInformationQuery } from "../../../services/userProfileApi";
const stats = [
  {
    text: "Views",
    icon: <BsFillEyeFill className="text-blue-500" />,
  },
  {
    text: "Solution",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="currentColor"
        className="text-teal-300"
      >
        <path
          fillRule="evenodd"
          d="M2.442 3.433C2 4.152 2 5.136 2 7.1v9.8c0 1.964 0 2.946.442 3.668a3 3 0 00.99.99C4.155 22 5.136 22 7.1 22h9.8c1.964 0 2.946 0 3.668-.442.403-.247.743-.587.99-.99C22 19.845 22 18.863 22 16.9V7.1c0-1.964 0-2.946-.442-3.667a3 3 0 00-.99-.99C19.845 2 18.863 2 16.9 2H7.1c-1.964 0-2.946 0-3.667.442a3 3 0 00-.99.99zm6.534 7.823l1.805 1.805 4.243-4.243a1 1 0 011.414 1.414l-4.95 4.95a1 1 0 01-1.414 0L7.562 12.67a1 1 0 111.414-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    text: "Discuss",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        width="1em"
        height="1em"
        fill="currentColor"
        className="text-green-600"
      >
        <path
          fillRule="evenodd"
          d="M9 12.553A3.746 3.746 0 0112.531 9l.22-.001a3.75 3.75 0 013.412 5.304l.33 1.727a.395.395 0 01-.462.462l-1.727-.331A3.75 3.75 0 019 12.749v-.197z"
          clipRule="evenodd"
        ></path>
        <path d="M1.5 8.251a6.75 6.75 0 013.73-6.036A6.657 6.657 0 018.249 1.5h.401a.75.75 0 01.042.001c2.95.164 5.403 2.265 6.112 5.065.101.402 0 .895-.543.911-.543.016-1.51.023-1.51.023a5.25 5.25 0 00-5.25 5.25s-.048 1.248-.024 1.5c.024.25-.513.64-.914.537a6.653 6.653 0 01-1.33-.502.05.05 0 00-.032-.004l-2.601.498a.75.75 0 01-.878-.877l.498-2.603a.05.05 0 00-.004-.032A6.655 6.655 0 011.5 8.251z"></path>
      </svg>
    ),
  },
  {
    text: "Reputation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="currentColor"
        className="text-orange-400"
      >
        <path
          fillRule="evenodd"
          d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.498.498 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.5.5 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918-.263.314-.6.558-.98.712-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.497.497 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.5 2.5 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
];

function LeftSide() {
  const { userData } = useSelector((state) => state.user);
  const { data } = useGetUserInformationQuery();
  console.log(data);

  return (
    <aside
      className="basis-80 py-5 px-4 rounded-md"
      style={{
        backgroundColor: "rgb(40 40 40)",
      }}
    >
      <div className="flex space-x-4 ">
        <img
          src="https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg"
          alt="avatar"
          className="h-20 w-20 bg-slate-500 rounded-md"
        />
        <div className="flex flex-col py-2">
          <h2 className="font-Lexend font-bold">Axror</h2>
          <p className="mt-auto flex gap-2 font-LexendPeta font-bold">
            <span className="text-gray-400">Rank</span>
            3,567,788
          </p>
        </div>
      </div>
      <Link to={"/profileSettings"}>
        <button className="w-full bg-emerald-500 font-Lexend rounded-md mt-3">
          Edit Profile
        </button>
      </Link>

      <hr className=" border-1 border-solid border-gray-500 my-3" />
      <div className="">
        <h2 className="text-xl font-Karla font-bold">Community Stats</h2>
        <article>
          {stats.map(({ text, icon }, i) => {
            return (
              <div className="flex items-start space-x-3 mt-3" key={i}>
                {icon}
                <div className="flex flex-col gap-2">
                  <p>
                    {" "}
                    {text}{" "}
                    <span className="text-white font-Lexend ml-1">0</span>
                  </p>
                  <p className="font-Karla text-sm text-stone-300">
                    Last Week{" "}
                    <span className="text-stone-500 font-Lexend ml-1">0</span>
                  </p>
                </div>
              </div>
            );
          })}
        </article>
        <hr className=" border-1 border-solid border-gray-500 my-3" />
        <h2 className="text-xl font-Karla font-bold">Languages </h2>
        <div className="flex justify-between items-center mt-3">
          <p
            className="w-max rounded-full p-1 px-2 text-sm font-Karla text-gray-400"
            style={{ backgroundColor: "#ffffff1a" }}
          >
            JavaScript
          </p>
          <p className="font-Karla text-sm flex gap-1 text-gray-400">
            <span className="text-white font-Lexend">0</span>
            problems solved
          </p>
        </div>
        <hr className=" border-1 border-solid border-gray-500 my-3" />

        <h2 className="text-xl font-Karla font-bold">Skills </h2>
        <div className="">
          <div className="mt-2">
            <h3 className="font-Karla flex items-center gap-2 font-bold">
              <span className="w-1 h-1 bg-red-500 block rounded-full text-sm"></span>{" "}
              Advanced
            </h3>
            <p className="text-gray-500 font-Karla text-center mt-2">
              Not enough data
            </p>
          </div>
          <div className="mt-2 my-2">
            <h3 className="font-Karla flex items-center gap-2 font-bold">
              <span className="w-1 h-1 bg-yellow-500 block rounded-full text-sm"></span>{" "}
              Intermediate
            </h3>
            <div className="flex items-center gap-5 mt-2">
              <p className="font-Karla text-gray-400 flex items-center gap-1">
                <span
                  className=" rounded-full p-1 px-2 text-sm font-Karla text-gray-300  "
                  style={{ backgroundColor: "#ffffff1a" }}
                >
                  {" "}
                  Hash Table
                </span>
                x1
              </p>
              <p className="font-Karla text-gray-400 flex items-center gap-1">
                <span
                  className=" rounded-full p-1 px-2 text-sm font-Karla text-gray-300  "
                  style={{ backgroundColor: "#ffffff1a" }}
                >
                  {" "}
                  Math
                </span>
                x1
              </p>
            </div>
          </div>
          <div className="mt-2 my-2">
            <h3 className="font-Karla flex items-center gap-2 font-bold">
              <span className="w-1 h-1 bg-green-500 block rounded-full text-sm"></span>{" "}
              Intermediate
            </h3>
            <div className="flex items-center flex-wrap gap-5 mt-2">
              <p className="font-Karla text-gray-400 flex items-center gap-1">
                <span
                  className=" rounded-full p-1 px-2 text-sm font-Karla text-gray-300  "
                  style={{ backgroundColor: "#ffffff1a" }}
                >
                  {" "}
                  Array
                </span>
                x1
              </p>
              <p className="font-Karla text-gray-400 flex items-center gap-1">
                <span
                  className=" rounded-full p-1 px-2 text-sm font-Karla text-gray-300  "
                  style={{ backgroundColor: "#ffffff1a" }}
                >
                  {" "}
                  String
                </span>
                x1
              </p>
              <p className="font-Karla text-gray-400 flex items-center gap-1">
                <span
                  className=" rounded-full p-1 px-2 text-sm font-Karla text-gray-300  "
                  style={{ backgroundColor: "#ffffff1a" }}
                >
                  {" "}
                  Simulation
                </span>
                x1
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default LeftSide;
