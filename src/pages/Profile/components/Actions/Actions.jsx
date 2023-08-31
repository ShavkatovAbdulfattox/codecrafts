import React from "react";

function Actions() {
  return (
    <section
      className="mt-5"
      style={{
        backgroundColor: "rgb(40 40 40)",
        padding: "16px", // Optional padding
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2
            className="p-2 px-5 rounded-md font-Lexend cursor-pointer"
            style={{ backgroundColor: "#ffffff1a" }}
          >
            Recent Ac
          </h2>
          <h2 className="p-2 px-5 rounded-md font-Lexend cursor-pointer text-slate-200">
            Solutions
          </h2>

        </div>
        <p className="font-Karla hover:text-gray-300 duration-100 cursor-pointer">
          View all submissions {">"}
        </p>
      </div>
      <div className="flex flex-col mt-5">
        <h2
          className="font-Lexend p-4 rounded-sm flex justify-between"
          style={{ backgroundColor: "#ffffff1a" }}
        >
          Counter
          <span className="text-stone-300">23 days ago</span>
        </h2>
        <h2 className="font-Lexend p-4 rounded-sm flex justify-between">
          Create Hello World Function
          <span className="text-stone-300">23 days ago</span>
        </h2>
        <h2
          className="font-Lexend p-4 rounded-sm flex justify-between"
          style={{ backgroundColor: "#ffffff1a" }}
        >
          Two Sum
          <span className="text-stone-300">23 days ago</span>
        </h2>
        <h2 className="font-Lexend p-4 rounded-sm flex justify-between">
          Fizz Buzz
          <span className="text-stone-300">23 days ago</span>
        </h2>
      </div>
    </section>
  );
}

export default Actions;
