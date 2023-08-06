import { useState } from "react";

import SolutionHeader from "./components/solutionHeader/SolutionHeader";
import SolutionBody from "./components/solutionBody/SolutionBody";

import "./postSolution.scss";
import { usePostSolutionMutation } from "../../services/questionApi";

const PostSolution = () => {
  const user = localStorage.getItem("userData");

  const [response, setResponse] = useState({
    name: "",
    text: "",
    tags: [],
    userId: JSON.parse(user)?.data?.id,
    questionId: 3,
    queryId: 0,
  });

  const [postSolution, { isLoading, data }] = usePostSolutionMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleClick = () => {
    postSolution(response).then((res) => res);
  };

  return (
    <div className="post-solution">
      <div className="post-solution__container">
        <div className="post-solution__header">
          <SolutionHeader
            handleClick={handleClick}
            response={response}
            setResponse={setResponse}
          />
        </div>
        <div className="post-solution__body">
          <SolutionBody response={response} setResponse={setResponse} />
        </div>
      </div>
    </div>
  );
};

export default PostSolution;
