/* eslint-disable react/prop-types */

const CommentBody = ({comment = {}}) => {
    return (
        <div className="problem-one-comment__body">
            {comment.text}
        </div>
    )
}

export default CommentBody;