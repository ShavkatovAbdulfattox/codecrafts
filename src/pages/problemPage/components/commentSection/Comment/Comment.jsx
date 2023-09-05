/* eslint-disable react/prop-types */
import CommentFoot from "./CommentFoot.jsx";
import CommentInput from "./CommentInput.jsx";
import {Fragment, useState} from "react";
import CommentHead from "./CommentHead.jsx";
import CommentBody from "./CommentBody.jsx";

const Comment = ({comment, refetch}) => {
    const [editingComment, setEditingComment] = useState(null)

    return (
        <div className="problem-one-comment">
            {
                editingComment ?
                    <CommentInput refetch={refetch}
                                  editingComment={editingComment}
                                  setEditingComment={setEditingComment}/>
                    :
                    <Fragment>
                        <CommentHead comment={comment}/>
                        <CommentBody comment={comment}/>
                        <CommentFoot comment={comment} setEditingComment={setEditingComment}/>
                    </Fragment>
            }
        </div>
    );
};

export default Comment;