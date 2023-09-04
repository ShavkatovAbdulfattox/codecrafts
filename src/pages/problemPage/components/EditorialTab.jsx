import axios from "axios";
import React, { useEffect, useState } from "react";

const EditorialTab = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://edubinplatform-a01d5146e549.herokuapp.com/editorial/get",
      data: {
        text: "String",
        editorialType: {},
        questionId: 0,
        queryId: 0,
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
  return <>{isLoading ? <div>loading...</div> : <div>hello</div>}</>;
};

export default EditorialTab;
