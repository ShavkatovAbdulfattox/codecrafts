/* eslint-disable react/prop-types */
import {monthNames} from "../../../../../constants/constants.js";
import {Avatar} from "antd";
import {baseURL} from "../../../../../constants/apiConstants.js";

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

export default CommentHead;