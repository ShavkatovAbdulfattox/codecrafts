/** @format */

import { Resizable } from "re-resizable";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetQuestionQuery } from "../../services/questionApi";
import { getUserData } from "../../utils/functions";
import ProblemLeftSide from "./components/ProblemLeftSide";
import ProblemRightSide from "./components/ProblemRightSide";
import "./problemPage.scss";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

function ProblemPage() {
  const [rightWidth, setRightWidth] = useState(0);
  const [editorLanguage, setEditorLanguage] = useState("java");
  const { id, query, additionalInfo } = useParams();

  const isQueryPage = query === "query";

  const { data: question = {}, isLoading } = useGetQuestionQuery({
    urlPart: isQueryPage ? "query" : "question",
    questionId: id,
    userId: getUserData()?.id,
  });

  //   const onResize = (a) => {
  //     setRightWidth(a.screenX);
  //   };

  return (
    <div className="playground-body main-content">
      <ReflexContainer
        orientation="vertical"
        style={{ display: "flex", width: "100%" }}
      >
        <ReflexElement style={{ overflow: "hidden" }}>
          <ProblemLeftSide
            question={question}
            isQueryPage={isQueryPage}
            additionalInfo={additionalInfo}
          />
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement style={{ overflow: "hidden" }}>
          <ProblemRightSide
            question={question}
            rightWidth={rightWidth}
            isLoading={isLoading}
            setEditorLanguage={setEditorLanguage}
            editorLanguage={editorLanguage}
            isQueryPage={isQueryPage}
          />
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
}

export default ProblemPage;
