import { Button } from "antd";
import Loader from "../../components/Loader";
import { useGetCategoriesQuery, useGetQuestionsByTopicQuery, useGetTopicsQuery } from "../../services/questionApi";
import "./problemListPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProblemsListPage = () => {
     const [topicId, setTopicId] = useState(null);
     const [categoryId, setCategoryId] = useState(1);
     const navigate = useNavigate();
     const { data: categories = [] } = useGetCategoriesQuery();
     const topics = categories.find(category => category.id === categoryId)?.topicList || [];

     // const { data: topics = [] } = useGetTopicsQuery();
     const { data: questions = [], isFetching, } = useGetQuestionsByTopicQuery(topicId, {
          skip: !topicId
     });

     const getQuestions = (id) => {
          setTopicId(id)
     }

     const onSolveQuestion = (id) => {
          navigate("/problem/" + id)
     }

     return (
          <section className="problems-list-page">
               <div className="problems-list__head">
                    <h1 className="text-[1.3em]">
                         Savollar <Loader show={isFetching} />
                    </h1>
                    <div className="flex gap-[8px] text-[#ccc] py-2">
                         {categories.map((category) => (
                              <div key={category.id}>
                                   <Button
                                        style={{
                                             backgroundColor: category.id === categoryId ? "blue" : "",
                                             borderColor: category.id === categoryId ? "blue" : "#4096FF"
                                        }}
                                        type="primary"
                                        onClick={() => setCategoryId(category.id)}
                                   >
                                        {category.name}
                                   </Button>
                              </div>
                         ))}
                    </div>
                    <div className="flex gap-[8px] text-[#ccc] text-[.85em]">
                         {topics.map((topic) => (
                              <div key={topic.id}>
                                   <Button onClick={() => getQuestions(topic.id)} className="problem-category-item">{topic.name}</Button>
                              </div>
                         ))}
                    </div>
                    <div className="flex flex-col gap-[8px] text-[#ccc] py-4">
                         {questions.map((question) => (
                              <div key={question.id} className="flex gap-2 border-1 border-[#666]">
                                   <div>{question.name}</div>
                                   <div>{question.level}</div>
                                   <div>{question.like1}</div>
                                   <div>{question.dislike}</div>
                                   <div>{question.solved}</div>
                                   <Button
                                        className="problem-category-item"
                                        onClick={() => onSolveQuestion(question.id)}>
                                        Ishlash
                                   </Button>
                              </div>
                         ))}
                         {questions.length === 0 ? <div className="py-3">Bu topikda savollar yo'q</div> : ''}
                    </div>
               </div>
          </section>
     );
};

export default ProblemsListPage;
