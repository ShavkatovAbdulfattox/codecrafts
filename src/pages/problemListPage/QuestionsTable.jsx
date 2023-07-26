/* eslint-disable react/prop-types */
import { Table, Tag } from "antd";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getQuestionDifficulty } from "../../utils/functions";
import { DislikeButton, LikeButton } from "../../utils/icons";

const QuestionTable = ({ questions }) => {
     const navigate = useNavigate();

     const solveQuestion = (id) => {
          navigate("/problem/" + id);
     };

     const columns = [
          {
               title: "№",
               dataIndex: "",
               key: "",
               render: (_, record, index) => ++index,
          },
          {
               title: "Yechilgan",
               dataIndex: "solved",
               key: "solved",
               width: "90px",
               render: (solved) => {
                    // shu joyga iconkalar qo'yamiz true va false holatlari uchun
                    return solved ? "@" : "-"
               }
          },
          {
               title: "Nomi",
               dataIndex: "name",
               key: "name",
               render: (name, question) => {
                    return <Link className="quesiton-link-button" to={"/problem/" + question.id}>{name}</Link>;
               },
          },
          {
               title: "Darajasi",
               dataIndex: "level",
               key: "level",
               render: (level) => {
                    return (
                         <Tag color="success"
                              style={{ borderRadius: "50px", padding: "0px 13px 2px 13px" }}>
                              {getQuestionDifficulty(level)}
                         </Tag>
                    )
               }
          },
          {
               title: "Yoqtirilgan",
               dataIndex: "like1",
               key: "like1",
               render: (like, record) => (
                    <div className="question-table-likes">
                         <div>
                              <LikeButton />
                              <span>{like}</span>
                         </div>
                         <div>
                              <DislikeButton />
                              <span>{record.dislike}</span>
                         </div>
                    </div>
               )
          },
     ];

     return (
          <Table
               size="small"
               className="question-table"
               rowClassName={(_, index) =>
                    index % 2 === 0 ? "table-row-light" : "table-row-dark"
               }
               columns={columns}
               dataSource={questions}
          />
     );
};

export default memo(QuestionTable);
