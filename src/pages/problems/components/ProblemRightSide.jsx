/* eslint-disable react/prop-types */
import { Editor } from '@monaco-editor/react';
import { Select, Switch } from 'antd';
import { memo, useRef, useState } from 'react';

const ProblemRightSide = ({ rightWidth, setFileName, file = {} }) => {

     const [theme, setTheme] = useState("vs-light")
     const editorRef = useRef(null);

     function handleEditorDidMount(editor, monaco) {
          editorRef.current = editor;
     }

     function showValue() {
          console.log(editorRef.current.getValue());
          fetch("http://myleetcode-6e7d4e375979.herokuapp.com/question/submit/1", {
               method: "POST",
               headers: {
                    'Access-Control-Allow-Origin': '*'
               },
               body: {
                    "userId": 3,
                    "console": "public  class Solution{ \n public boolean[] check2(){ \n return new boolean[]{true,false}; }}",
                    "language": "java"
               }
          }).then(res => {
               console.log({ res });
          })
     }

     const onChangeTheme = () => {
          setTheme((prev) => prev === "vs-light" ? "vs-dark" : "vs-light")
     }

     const languageOptions = [
          {
               value: 'java',
               label: 'Java',
          },
          {
               value: 'python',
               label: 'Python',
          },
     ]

     return (
          <section className="right-side" style={{ width: (1300 - rightWidth) + "px" }}>
               <div className="right-side__header">
                    <Select
                         defaultValue="Java"
                         onChange={(value) => setFileName(value)}
                         options={languageOptions}
                         style={{
                              width: 120,
                         }}
                    />
                    <Switch
                         checkedChildren="Dark"
                         unCheckedChildren="Light"
                         onChange={onChangeTheme}
                    />
                    <button onClick={showValue}>Show value</button>
               </div>
               <Editor
                    height="80vh"
                    theme={theme}
                    path={file.name}
                    language={file.language}
                    onMount={handleEditorDidMount}
                    defaultLanguage={file.language}
                    defaultValue={file.value}
               />
          </section>
     )
}

export default memo(ProblemRightSide)