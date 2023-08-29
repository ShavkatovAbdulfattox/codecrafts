import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const User = ({ paramId }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //https://edubinplatform-a01d5146e549.herokuapp.com/submissions/get
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

        console.log(apiData);
        setData(apiData);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const uniqueStatusValuesLang = Array.from(
    new Set(data.map((el) => el.language))
  );
  const uniqueUserNames = Array.from(new Set(data.map((el) => el.userName)));
  const uniquePictures = Array.from(new Set(data.map((el) => el.picture)));

  const timeById = data.map((el) => (
    <span key={el.time}>
      {`${new Date(el.time).toLocaleString("en-US", {
        month: "short",
      })} ${new Date(el.time).getDate()},
    ${new Date(el.time).getFullYear()} ${new Date(el.time).toLocaleTimeString(
        "en-US"
      )}`}
    </span>
  ));
  const ids = timeById.map((el) => el.props.children);


  const uniqueConsole = Array.from(new Set(data.map((el) => el.console)));
  console.log(uniqueConsole);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="pl-4 mt-8 items-start">
          <div className="flex items-center gap-4">
            <img
              src="https://www.picsum.photos/45/45"
              // src={data.picture}
              alt="profile"
              className="rounded-full w-16"
            />
            <div>
              <h4>{uniqueUserNames}</h4>
              <p>{ids[paramId]}</p>
            </div>
          </div>
          <div className="mt-6">
            {uniqueStatusValuesLang.map((lang) => (
              <div key={lang}>
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
            <pre
              className="h-[62vh] mt-4 resize text-blue-400 focus:outline-none bg-[#ffffff12] w-[50vw] rounded-lg p-4 overflow-hidden"
              placeholder="kod"
              readOnly
            >
              {uniqueConsole[paramId]}
            </pre>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
