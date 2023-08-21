import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const User = () => {
  const [data, setData] = useState([]);
  //https://edubinplatform-a01d5146e549.herokuapp.com/submissions/get
  useEffect(() => {
    axios({
      method: "post",
      url: "https://edubinplatform-a01d5146e549.herokuapp.com/submissions/get",
      data: {
        // questionId: 10,
        questionId: 2,
        queryId: 0,
        // userId: 2,
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
  const latestDate = new Date(Math.max(...data.map((el) => new Date(el.time))));

  const uniqueStatusValuesLang = Array.from(
    new Set(data.map((el) => el.language))
  );
  const uniqueUserNames = Array.from(new Set(data.map((el) => el.userName)));
  const uniquePictures = Array.from(new Set(data.map((el) => el.picture)));
  const uniqueConsole = Array.from(new Set(data.map((el) => el.console)));
  // console.log();
  return (
    <div className="pl-4 mt-8 items-start">
      <div className="flex items-center gap-4">
        <img
          src="https://www.picsum.photos/45/45"
          // src={uniquePictures[0]}
          alt="profile"
          className="rounded-full w-16"
        />
        <div>
          <h4>{uniqueUserNames[0]}</h4>
          <p>{`${latestDate
            .toLocaleString("en-US", {
              month: "short",
            })
            .toLowerCase()} ${latestDate.getDate()}, ${latestDate.getFullYear()} 
            ${String(latestDate.getHours()).padStart(2, "0")}:${String(
            latestDate.getMinutes()
          ).padStart(2, "0")}`}</p>
        </div>
      </div>
      <div className="mt-6">
        {uniqueStatusValuesLang.map((lang) => (
          <div>
            {lang == "java" && (
              <span
                key={lang}
                className="text-xs rounded-full bg-blue-200 text-blue-700 px-3 py-1 font-medium leading-4"
              >
                {lang}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="bg-fill-4 dark:bg-dark-fill-4 w-full rounded-lg p-4">
        <textarea
          className="h-[62vh] mt-4 resize text-blue-400 focus:outline-none bg-[#ffffff12] w-[50vw] rounded-lg p-4 overflow-hidden"
          placeholder="kod"
          value={uniqueConsole[0]}
        ></textarea>
      </div>
    </div>
  );
};

export default User;
