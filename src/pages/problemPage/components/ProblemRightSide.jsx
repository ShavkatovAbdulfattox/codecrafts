/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import { Editor } from "@monaco-editor/react";
import { Button, message, Select, Switch } from "antd";
import { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { usePostAnswerMutation } from "../../../services/questionApi";
import { ErrorCatcher, getUserData } from "../../../utils/functions.js";
import User from "./RightUser";

const languageOptions = {
  defaultLanguages: [
    {
      value: "java",
      label: "Java",
    },
    {
      value: "python",
      label: "Python",
    },
    {
      value: "kotlin",
      label: "Kotlin",
    },
  ],
  databaseLanguages: [
    {
      value: "postgres",
      label: "postgres",
    },
  ],
};

const ProblemRightSide = ({
  isLoading,
  isQueryPage,
  question,
  rightWidth,
  editorLanguage,
  setEditorLanguage,
  file = {},
}) => {
  const state = useSelector((state) => state.leftSide.selectedId);
//   console.log(state, "store"); // null,

  const [theme, setTheme] = useState("vs-dark");
  const [editorValue, setEditorValue] = useState("");
  const [answerError, setAnswerError] = useState("");
  const [defaultValue, setDefaultValue] = useState("");

  useEffect(() => {
    setEditorValue(question.console?.[editorLanguage]);
  }, [question, editorLanguage]);

  const [postAnswer, { isLoadingAnswer }] = usePostAnswerMutation();
  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function showValue() {
    postAnswer({
      userId: getUserData()?.id,
      console: editorRef.current.getValue(),
      language: editorLanguage,
      questionId: question?.id,
    })
      .unwrap()
      .then((res) => {
        if (res.passed) {
          console.log(res);
          message.success("Javob qabul qilindi!");
        } else {
          setAnswerError(res.error);
          // message.error("Qabul qilinmadi! res.error")
        }
      })
      .catch(ErrorCatcher);
  }

  const onChangeTheme = () => {
    setTheme((prev) => (prev === "vs-light" ? "vs-dark" : "vs-light"));
  };

  function handleEditorChange(value) {
    setEditorValue(value);
  }

  return (
    <>
      {state ? (
        <User />
      ) : (
        <section
          className="right-side overflow-hidden"
          // style={{ width: 1300 - rightWidth + "px", color: "#333" }}
        >
          <div className="right-side__header">
            <Select
              defaultValue={isQueryPage ? "postgres" : "Java"}
              onChange={setEditorLanguage}
              loading={isLoading}
              disabled={isLoading}
              options={
                isQueryPage
                  ? languageOptions.databaseLanguages
                  : languageOptions.defaultLanguages
              }
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
            <Button size="small" onClick={showValue} loading={isLoadingAnswer}>
              Tekshirish
            </Button>
            <Button size="small" onClick={showValue} loading={isLoadingAnswer}>
              Javobni yuborish
            </Button>
          </div>
          <Editor
            height="80vh"
            theme={theme}
            // path={file.name}
            language={editorLanguage}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            // defaultLanguage={editorLanguage}
            defaultValue={defaultValue}
            value={editorValue}
          />
          <div className="text-white right-side__test-case">{answerError}</div>
        </section>
      )}
    </>
  );
};

export default memo(ProblemRightSide);
