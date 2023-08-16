import { Resizable } from "re-resizable";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetQuestionQuery } from "../../services/questionApi";
import { getUserData } from "../../utils/functions";
import ProblemLeftSide from "./components/ProblemLeftSide";
import ProblemRightSide from "./components/ProblemRightSide";
import "./problemPage.scss";

function ProblemPage() {
     // const editorRef = useRef(null);
     const [rightWidth, setRightWidth] = useState(0);
     const [editorLanguage, setEditorLanguage] = useState("java");
     const { id, query } = useParams()
     const isQueryPage = query === "query";

     const { data: question = {}, isLoading } = useGetQuestionQuery({
          urlPart: isQueryPage ? "query" : "question",
          questionId: id,
          userId: getUserData()?.id
     });

     // useEffect(() => {
     //      editorRef.current?.focus();
     // }, [file.name]);

     const onResize = (a) => {
          setRightWidth(a.screenX)
     }

     return (
          <div className="playground-body">
               <Resizable
                    className="playground-resizer"
                    enable={{
                         top: false,
                         right: true,
                         bottom: false,
                         left: false,
                         topRight: false,
                         bottomRight: false,
                         bottomLeft: false,
                         topLeft: false
                    }}
                    maxWidth="70%"
                    onResize={onResize}
                    defaultSize={{
                         width: "40%",
                    }}
               >
                    <ProblemLeftSide question={question} isQueryPage={isQueryPage} />
               </Resizable>
               <ProblemRightSide
                    question={question}
                    rightWidth={rightWidth}
                    isLoading={isLoading}
                    setEditorLanguage={setEditorLanguage}
                    editorLanguage={editorLanguage}
                    isQueryPage={isQueryPage}
               />
          </div>
     );
}

export default ProblemPage;
