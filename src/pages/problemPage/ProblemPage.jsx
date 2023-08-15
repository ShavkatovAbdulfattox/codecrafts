import { Resizable } from "re-resizable";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetQuestionQuery } from "../../services/questionApi";
import files from "../dashboard/files";
import ProblemLeftSide from "./components/ProblemLeftSide";
import ProblemRightSide from "./components/ProblemRightSide";
import "./problemPage.scss";
import { getUserData } from "../../utils/functions";

function ProblemPage() {
     const editorRef = useRef(null);
     const [rightWidth, setRightWidth] = useState(0);
     const [fileName, setFileName] = useState("java");
     const file = files[fileName];
     const { id } = useParams()

     const { data: question = {}, isLoading } = useGetQuestionQuery({ questionId: id, userId: getUserData()?.id });

     useEffect(() => {
          editorRef.current?.focus();
     }, [file.name]);

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
                    <ProblemLeftSide question={question} />
               </Resizable>
               <ProblemRightSide
                    question={question}
                    rightWidth={rightWidth}
                    setFileName={setFileName}
                    fileName={fileName}
                    file={file}
               />
          </div>
     );
}

export default ProblemPage;
