/* eslint-disable react/prop-types */
import { Select } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import Tab3Table from "./Tab3Table";

const Tab3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://edubinplatform-a01d5146e549.herokuapp.com/submissions/get",
      data: {
        questionId: 2,
        queryId: 0,
        userId: 8,
      },
    })
      .then((response) => {
        const apiData = response.data.data;
        const dataWithIds = apiData.map((item) => ({
          ...item,
          id: uuidv4(),
        }));
        console.log(dataWithIds);
        setData(dataWithIds);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [status, setStatus] = useState("");
  const handleChange = (value) => {
    setStatus(value);
  };
  const [language, setLanguage] = useState("");

  const handleChangeLang = (lang) => {
    setLanguage(lang);
  };

  const uniqueStatusValues = Array.from(new Set(data.map((el) => el.status)));

  const uniqueStatusValuesLang = Array.from(
    new Set(data.map((el) => el.language))
  );

  return (
    <>
      <div className="">
        <ul className="flex justify-between items-center">
          <li>
            <Select
              defaultValue={{
                value: "status",
                label: "Status",
              }}
              onChange={handleChange}
              options={uniqueStatusValues.map((status) => ({
                value: status, // Ensure each option has a unique value
                label: status,
              }))}
              style={{
                width: 90,
              }}
            />
          </li>
          <li>
            <Select
              defaultValue={{
                value: "langauge",
                label: "Language",
              }}
              onChange={handleChangeLang}
              options={uniqueStatusValuesLang.map((lang) => ({
                value: lang, // Ensure each option has a unique value
                label: lang,
              }))}
              style={{
                width: 90,
              }}
            />
          </li>
          <li className="w-[90px]">
            <button>Runtime</button>
          </li>
          <li className="w-[90px]">
            <button>Time</button>
          </li>
        </ul>
        <ul className="flex justify-between items-center">
          {/* satatus options */}
          <li>
            <div className="flex flex-col py-[9px]">
              {data.map((el) => (
                <div
                  key={el.id}
                  className={
                    el.status === "ERROR"
                      ? `text-sm font-medium px-2 text-red-600 py-[9px]`
                      : `text-sm font-medium px-2 text-green-600 py-[9px]`
                  }
                >
                  {el.status}
                </div>
              ))}
            </div>
          </li>
          {/* language options */}
          <li>
            <div className="lang flex flex-col py-[9px]">
              {data.map((el) => (
                <div key={el.id} className="px-2 py-[9px]">
                  {el.language}
                </div>
              ))}
            </div>
          </li>
          <li className="pt-2 cursor-pointer hover:bg-[#ffffff12]">
            <div className="runtime py-[9px]">
              {data.map((el) => (
                <div key={el.id} className="px-2 py-[9px]">
                  {`${el.runtime} ms`}
                </div>
              ))}
            </div>
          </li>
          <li className="pt-2 cursor-pointer hover:bg-[#ffffff12]">
            <div className="time py-[9px]">
              {data.map((el) => (
                <div key={el.id} className="px-2 py-[9px]">
                  {`${new Date(el.time)
                    .toLocaleString("en-US", { month: "short" })
                    .toLowerCase()} ${new Date(el.time).getDate()}, 
                  ${new Date(el.time).getFullYear()}`}
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
      {/* <Tab3Table/> */}
    </>
  );
};

export default Tab3;
