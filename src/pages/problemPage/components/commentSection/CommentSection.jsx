/* eslint-disable react/prop-types */
import {Collapse, Spin} from "antd";
import "./CommentSection.scss";
import {useState} from "react";
import {useGetCommentsQuery} from "../../../../services/commentsApi.js";
import {useParams} from "react-router-dom";
import Comments from "./Comments.jsx";

const CommentSection = () => {
    const [isOpened, toggleCollapse] = useState(false)
    const {id} = useParams()
    const {data: comments, isLoading, refetch} = useGetCommentsQuery({questionId: id}, {
        skip: !isOpened
    })

    const onChange = () => {
        toggleCollapse(prev => !prev)
    };

    const Label =
        <div>
            Muhokamalar
            <Spin spinning={isLoading} style={{marginLeft: "20px"}} size="small"></Spin>
        </div>

    const items = [
        {
            key: '1',
            label: Label,
            children: <Comments comments={comments} refetch={refetch}/>,
        },
    ];
    return (
        <div className="problems-comments-section">
            <Collapse items={items} onChange={onChange}/>
        </div>
    );
};

export default CommentSection;