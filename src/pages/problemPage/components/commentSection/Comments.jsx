/* eslint-disable react/prop-types */
import {Fragment} from "react";
import CommentInput from "./Comment/CommentInput.jsx";
import Comment from "./Comment/Comment.jsx";

const Comments = ({comments = [], refetch}) => {

    return (
        <Fragment>
            <CommentInput refetch={refetch}/>
            {
                comments?.map((comment, key) => {
                    return (
                        <Comment comment={comment} key={key} refetch={refetch}/>
                    )
                })
            }
        </Fragment>
    )
}

export default Comments;