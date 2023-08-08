/* eslint-disable react/prop-types */
import {Editor} from '@monaco-editor/react';
import {Button, message, Select, Switch} from 'antd';
import {memo, useEffect, useRef, useState} from 'react';
import {usePostAnswerMutation} from '../../../services/questionApi';
import {ErrorCatcher} from "../../../utils/functions.js";

const ProblemRightSide = ({question, rightWidth, setFileName, fileName, file = {}}) => {


    const [theme, setTheme] = useState("vs-dark")
    const [defaultValue, setDefaultValue] = useState("")

    useEffect(() => {
        setDefaultValue(question.console?.[fileName])
    }, [question])

    const [postAnswer, {isLoading}] = usePostAnswerMutation()
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function showValue() {
        postAnswer({
            userId: 1,
            console: editorRef.current.getValue(),
            language: "java"
        }).unwrap().then(res => {
            if (res.passed) {
                message.success("Javob qabul qilindi!")
            } else {
                message.error("Qabul qilinmadi!")
            }
        }).catch(ErrorCatcher)
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

    const CodeEditor = () => {
        return <Editor
            height="80vh"
            theme={theme}
            path={file.name}
            language={file.language}
            onMount={handleEditorDidMount}
            defaultLanguage={file.language}
            defaultValue={defaultValue}
        />
    }
    return (
        <section className="right-side" style={{width: (1300 - rightWidth) + "px", color: "#333"}}>
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
            <CodeEditor/>
        </section>
    )
}

export default memo(ProblemRightSide)