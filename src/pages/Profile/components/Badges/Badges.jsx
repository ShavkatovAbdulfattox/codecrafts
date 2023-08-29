import React from "react";

function Badges() {
  return (
    <section
      className="basis-1/2 rounded-md py-5 px-4 flex flex-col justify-between"
      style={{
        backgroundColor: "rgb(40 40 40)",
      }}
    >
      <div>
        <h2 className="font-Karla text-gray-300">Badges</h2>
        <h2 className="font-Lexend text-3xl">0</h2>
      </div>
      <img
        src="https://leetcode.com/static/images/badges/dcc-2023-9.png"
        alt="badge"
        className="h-20 w-20 opacity-10 self-end"
      />
      <div className="">
        <p className="font-Karla text-gray-400">Locked Badge</p>
        <h2 className="font-Lexend ">Sep LeetCoding Challenge</h2>
      </div>
    </section>
  );
}

export default Badges;
