/* eslint-disable react/prop-types */
import { Editor } from '@monaco-editor/react';
import { Select, Switch } from 'antd';
import { memo, useState } from 'react';

const ProblemRightSide = ({ rightWidth, setFileName, file = {} }) => {

     const [theme, setTheme] = useState("vs-light")

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
               </div>
               <Editor
                    height="80vh"
                    theme={theme}
                    path={file.name}
                    language={file.language}
                    defaultLanguage={file.language}
                    defaultValue={file.value}
               />
          </section>
     )
}

export default memo(ProblemRightSide)