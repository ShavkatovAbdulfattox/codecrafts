/* eslint-disable react/prop-types */
import {DownButton, EditIcon, MessageIcon, ReplyIcon, UpButton} from "../../../../../utils/icons.jsx";
import {getUserData} from "../../../../../utils/functions.js";

const CommentFoot = ({comment, setEditingComment}) => {
    const curentUser = getUserData()

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
                        <button onClick={() => setEditingComment(comment)}>
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


export default CommentFoot;