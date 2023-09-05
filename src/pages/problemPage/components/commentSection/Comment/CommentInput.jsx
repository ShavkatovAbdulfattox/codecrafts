import {useState} from "react";
import {ErrorCatcher, getUserData} from "../../../../../utils/functions.js";
import {useSelector} from "react-redux/es/hooks/useSelector";
import {usePostComentMutation} from "../../../../../services/commentsApi.js";
import {Button, message} from "antd";
import TextArea from "antd/es/input/TextArea.js";

3/* eslint-disable react/prop-types */

const CommentInput = ({refetch, editingComment, setEditingComment}) => {
    const [text, setText] = useState('')
    const {currentQuestion} = useSelector(state => state.mainFeatures)
    const [postComment, {isLoading}] = usePostComentMutation()

    const a = {
        "text": "String",
        "parent": 0,
        "fromUserId": 1,
        "toUserId": 2,
        "questionId": 12,
        "queryId": 0,
        "solutionId": 0
    }
    const cancel = () => {
        setEditingComment(null)
    }

    const saveComment = () => {
        const comment = {
            text,
            parent: 0,
            fromUserId: getUserData()?.id,
            toUserId: 2,
            questionId: currentQuestion.id,
            queryId: 0,
            solutionId: 0
        }
        postComment(comment).unwrap()
            .then(res => {
                if (res) {
                    refetch()
                    message.success("Izoh qo`shildi")
                }
            })
            .catch(err => {
                ErrorCatcher(err)
            })
    }

    return (
        <div className="problem-one-comment-input">
            <TextArea rows={4}
                      style={{maxHeight: "200px"}}
                      onChange={e => setText(e.target.value)}
                      placeholder="Maksimal tekst uzunligi 700"
                      maxLength={700}/>
            <div className="problem-one-comment-input__foot">
                {
                    editingComment ?
                        <Button loading={isLoading}
                                onClick={cancel}>Orqaga</Button> : null
                }
                <Button loading={isLoading} onClick={saveComment} disabled={!text.length}>
                    {editingComment ? "Izohni saqlash" : "Izohni qoshish"}
                </Button>
            </div>
        </div>
    )
}

export default CommentInput;