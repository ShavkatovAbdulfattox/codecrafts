/* eslint-disable react/prop-types */
import {useSelector} from "react-redux/es/hooks/useSelector.js";
import {usePostComentMutation} from "../../../../services/commentsApi.js";
import {ErrorCatcher, getUserData} from "../../../../utils/functions.js";
import {Fragment, useState} from "react";
import {Avatar, Button, message} from "antd";
import {monthNames} from "../../../../constants/constants.js";
import {baseURL} from "../../../../constants/apiConstants.js";
import {DownButton, EditIcon, MessageIcon, ReplyIcon, UpButton} from "../../../../utils/icons.jsx";
import TextArea from "antd/es/input/TextArea.js";

const Comments = ({comments = [], refetch}) => {
    const {currentQuestion} = useSelector(state => state.mainFeatures)

    const [postComment, {isLoading}] = usePostComentMutation()
    const curentUser = getUserData()
    const CommentInput = () => {
        const [text, setText] = useState('')

        const a = {
            "text": "String",
            "parent": 0,
            "fromUserId": 1,
            "toUserId": 2,
            "questionId": 12,
            "queryId": 0,
            "solutionId": 0
        }
        const saveComment = () => {
            if (text.length) {
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
            } else {
                message.warning("Iltimos avval izoh yozing")
            }
        }
        return (
            <div className="problem-one-comment-input">
                <TextArea rows={4}
                          style={{maxHeight: "200px"}}
                          onChange={e => setText(e.target.value)}
                          placeholder="Maksimal tekst uzunligi 700"
                          maxLength={700}/>
                <div className="problem-one-comment-input__foot">
                    <Button loading={isLoading} onClick={saveComment}>Izohni qoshish</Button>
                </div>
            </div>
        )
    }

    const CommentHead = ({comment = {}}) => {

        const date = comment.localDateTime;
        const year = date?.[0]
        const month = monthNames[date?.[1] - 1]
        const day = date?.[2]

        return (
            <div className="problem-one-comment__head">
                <div className="problem-one-comment__user">
                    <div className="problem-one-comment__avatar">
                        <Avatar src={baseURL + "/api/image/" + comment.picture}/>
                    </div>
                    <div className="problem-one-comment__author">{comment.firstName}</div>
                </div>
                <div className="problem-one-comment__date">
                    {`${month}  ${day},  ${year}`}
                </div>
            </div>
        )
    }
    const CommentBody = ({comment = {}}) => {
        return (
            <div className="problem-one-comment__body">
                {comment.text}
            </div>
        )
    }

    const CommentFoot = ({comment}) => {
        return (
            <div className="problem-one-comment__foot">
                <div className="problem-one-comment__foot-item">
                    <button>
                        <UpButton/>
                    </button>
                    <div>{comment.like - comment.dislike}</div>
                    <button>
                        <DownButton/>
                    </button>
                </div>
                <div className="problem-one-comment__foot-item comment__foot-item__reply">
                    <button>
                        <MessageIcon/>
                        <div>
                            Javoblarni ko`rish
                        </div>
                    </button>
                </div>
                <div className="problem-one-comment__foot-item comment__foot-item__reply">
                    <button>
                        <ReplyIcon/>
                        <div>
                            Javob yozish
                        </div>
                    </button>
                </div>
                <div className="problem-one-comment__foot-item comment__foot-item__edit">
                    {
                        comment.userId === curentUser.id ?
                            <button>
                                <EditIcon/>
                                <div>
                                    O`zgartirish
                                </div>
                            </button> : ""
                    }
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <CommentInput/>
            {
                comments?.map((comment, key) =>
                    <div className="problem-one-comment" key={key}>
                        <CommentHead comment={comment}/>
                        <CommentBody comment={comment}/>
                        <CommentFoot comment={comment}/>
                    </div>
                )
            }
        </Fragment>
    )
}

export default Comments;