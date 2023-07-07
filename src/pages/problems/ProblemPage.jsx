import { Resizable } from "re-resizable";
import { useEffect, useRef, useState } from "react";
import ProblemLeftSide from "./components/ProblemLeftSide";
import ProblemRightSide from "./components/ProblemRightSide";
import "./problemPage.scss";
import files from "../dashboard/files";
import { useGetUsersQuery } from "../../services/userApi";

function ProblemPage() {
     const editorRef = useRef(null);
     const [rightWidth, setRightWidth] = useState(0);
     const [fileName, setFileName] = useState("java");
     const file = files[fileName];

     useEffect(() => {
          editorRef.current?.focus();
     }, [file.name]);

     const onResize = (a) => {
          setRightWidth(a.screenX)
     }


     const { data, error, isLoading } = useGetUsersQuery();

     return (
          <div className="playground-body">
               {isLoading ? "Loading" : ""}
               {
                    console.log({ data })
               }

               <Resizable
                    enable={{ top: false, right: true, bottom: false, left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }}
                    maxWidth="70%"
                    onResize={onResize}
                    defaultSize={{
                         width: "40%",
                    }}
               >
                    <ProblemLeftSide />
               </Resizable>
               <ProblemRightSide
                    rightWidth={rightWidth}
                    setFileName={setFileName}
                    file={file}
               />
          </div>
     );
}

export default ProblemPage;
