/* eslint-disable react/prop-types */
import { Editor } from '@monaco-editor/react';
import { Button, Select, Switch } from 'antd';
import { memo, useRef, useState } from 'react';
import { usePostAnswerMutation } from '../../../services/questionApi';

const ProblemRightSide = ({ rightWidth, setFileName, file = {} }) => {

     const [postAnswer, { isLoading }] = usePostAnswerMutation()

     const [theme, setTheme] = useState("vs-dark")
     const editorRef = useRef(null);

     function handleEditorDidMount(editor, monaco) {
          editorRef.current = editor;
     }

     function showValue() {
          postAnswer({
               userId: 3,
               console: editorRef.current.getValue(),
               language: "java"
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
          <section className="right-side" style={{ width: (1300 - rightWidth) + "px", color: "#333" }}>
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
                         defaultChecked={true}
                         unCheckedChildren="Light"
                         onChange={onChangeTheme}
                    />
                    <Button onClick={showValue} loading={isLoading}>
                         Jo'natish
                    </Button>
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