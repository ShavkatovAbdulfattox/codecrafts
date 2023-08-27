/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import { Table, Tag } from "antd";
import { memo } from "react";
import { Link } from "react-router-dom";
import { getQuestionDifficulty } from "../../utils/functions";
import { CorrectIcon } from "../../utils/icons";

const QuestionTable = ({ questions, isLoadingCategories, isLoadingQuestions }) => {
    const gotoPath = (question) => {
        // if (question.query) {
        // console.log({ question });
        // }
        // const path = question.query ? "/problem/query/" : "/problem/"
        // return path + question.id
        const path = question.query ? "/query/" : "/problem/";
        return path + question.id;
    };

    const columns = [
        {
            title: "№",
            dataIndex: "",
            key: "",
            align: "center",
            render: (_, record, index) => ++index,
        },
        {
            title: "Yechilgan",
            dataIndex: "solved",
            key: "solved",
            width: "90px",
            align: "center",
            render: (solved) => {
                // shu joyga iconkalar qo'yamiz true va false holatlari uchun
                return !!solved ? <CorrectIcon /> : "";
            },
        },
        {
            title: "Nomi",
            dataIndex: "name",
            key: "name",
            render: (name, question) => {
                return (
                    <Link
                        className="quesiton-link-button"
                        to={gotoPath(question)}
                    >
                        {name}
                    </Link>
                );
            },
        },
        {
            title: "Darajasi",
            dataIndex: "level",
            key: "level",
            align: "center",
            render: (level) => {
                return (
                    <Tag
                        color="success"
                        style={{
                            borderRadius: "50px",
                            padding: "0px 13px 2px 13px",
                        }}
                    >
                        {getQuestionDifficulty(level)}
                    </Tag>
                );
            },
        },
        {
            title: "Ball",
            dataIndex: "ball",
            key: "ball",
            align: "center",
        },
        // {
        //     title: "Yoqtirilgan",
        //     dataIndex: "like1",
        //     key: "like1",
        //     render: (like, record) => (
        //         <div className="question-table-likes">
        //             <div onClick={() => onGiveLike(record.id)}>
        //                 <LikeButton />
        //                 <span>{like}</span>
        //             </div>
        //             <div>
        //                 <DislikeButton />
        //                 <span>{record.dislike}</span>
        //             </div>
        //         </div>
        //     ),
        // },
    ];

    const isLoadingTable = isLoadingCategories || isLoadingQuestions

    return (
        <Table
            size="small"
            className="question-table"
            rowClassName={(_, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            columns={columns}
            loading={isLoadingTable}
            dataSource={questions}
        />
    );
};

export default memo(QuestionTable);
