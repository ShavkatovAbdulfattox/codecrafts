import React from "react";

import axios from "axios";
import { useQuery } from "react-query";

async function fetchEdit() {
  try {
    const response = await axios.get({
      method: "post",
      url: "http://localhost:8080/editorial/create",
      data: {
        text: "String",
        editorialType: {},
        questionId: 0,
        queryId: 0,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

const EditorialTab = () => {
  const { data, isLoading, isError } = useQuery("editorial", () => fetchEdit());

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data for editorial</p>;

  return (
    <div>
      <h1>salom</h1>
    </div>
  );
};

export default EditorialTab;
