/* eslint-disable react/prop-types */
import { Editor } from '@monaco-editor/react';
import { Button, message, Select, Switch } from 'antd';
import { memo, useEffect, useRef, useState } from 'react';
import { usePostAnswerMutation } from '../../../services/questionApi';
import { ErrorCatcher, getUserData } from "../../../utils/functions.js";

const ProblemRightSide = ({ question, rightWidth, setFileName, fileName, file = {} }) => {

    const [theme, setTheme] = useState("vs-dark")
    const [editorValue, setEditorValue] = useState("")
    const [answerError, setAnswerError] = useState('')
    const [defaultValue, setDefaultValue] = useState("")

    useEffect(() => {
        setDefaultValue(question.console?.[fileName])
    }, [question])

    const [postAnswer, { isLoading }] = usePostAnswerMutation()
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function showValue() {
        postAnswer({
            userId: getUserData()?.id,
            console: editorRef.current.getValue(),
            language: "java",
            questionId: question.id,
        }).unwrap().then(res => {
            if (res.passed) {
                message.success("Javob qabul qilindi!")
            } else {
                setAnswerError(res.error)
                // message.error("Qabul qilinmadi! res.error")
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

    function handleEditorChange(value, event) {
        setEditorValue(value)
    }


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
                <Button size='small' onClick={showValue} loading={isLoading}>
                    Tekshirish
                </Button>
                <Button size='small' onClick={showValue} loading={isLoading}>
                    Javobni yuborish
                </Button>
            </div>
            <Editor
                height="80vh"
                theme={theme}
                path={file.name}
                language={file.language}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                defaultLanguage={file.language}
                defaultValue={defaultValue}
                value={editorValue}
            />
            <div className='text-white right-side__test-case'>
                {
                    answerError
                }
            </div>
        </section>
    )
}

export default memo(ProblemRightSide)