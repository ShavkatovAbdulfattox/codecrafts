/* eslint-disable react/prop-types */
import { Table } from "antd";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";

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
               // render: () => {
               // return
               // }
          },
          {
               title: "Nomi",
               dataIndex: "name",
               key: "name",
               render: (name, question) => {
                    return <Link to={"/problem/" + question.id} state={question}>{name}</Link>;
               },
          },
          {
               title: "Darajasi",
               dataIndex: "level",
               key: "level",
          },
          {
               title: "Yoqtirilgan",
               dataIndex: "like1",
               key: "like1",
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
