/** @format */

import { Button } from "antd";
import { useEffect, useMemo, useState } from "react";
import Loader from "../../components/Loader";
import {
  useGetCategoriesQuery,
  useGetQuestionsByTopicQuery,
} from "../../services/questionApi";
import { default as QuestionsTable } from "./QuestionsTable";
import "./problemListPage.scss";

const ProblemsListPage = () => {
  const [topicId, setTopicId] = useState(null);
  const [categoryId, setCategoryId] = useState(2);

  // Categoriyalarni olib kelish
  const { data: categories = [], isLoading } = useGetCategoriesQuery();

  // Categoriyalarni ichidagi topiclarni olish
  const topics = useMemo(
    () =>
      categories.find((category) => category.id === categoryId)
        ?.topicList || [],
    [categories, categoryId]
  );

  useEffect(() => {
    setTopicId(topics[0]?.id);
  }, [topics]);

  const { data: questions = [] } = useGetQuestionsByTopicQuery(topicId, {
    skip: !topicId,
  });

  const getQuestions = (id) => {
    setTopicId(id);
  };

  const Categories = () => {
    const className = (category) =>
      category.id === categoryId
        ? "category-button-active"
        : "category-button";
    return categories.map((category) => (
      <div key={category.id}>
        <Button
          className={className(category)}
          type="primary"
          onClick={() => setCategoryId(category.id)}
        >
          {category.name}
        </Button>
      </div>
    ));
  };

  const Topics = () =>
    useMemo(() => {
      const className = (topic) =>
        topic.id === topicId ? "topic-button-active" : "topic-button";
      return topics.map((topic) => (
        <div key={topic.id}>
          <Button
            className={className(topic)}
            onClick={() => getQuestions(topic.id)}
          >
            {topic.name}
          </Button>
        </div>
      ));
    }, [topics]);

  return (
    <section className="problems-list-page container">
      <div className="problems-list__head">
        <h1 className="text-[1.3em]">
          Savollar <Loader show={isLoading} />
        </h1>
        <div className="flex gap-[8px] text-[#ccc] py-2">
          <Categories />
        </div>
        <div className="flex gap-[8px] text-[#ccc] text-[.85em]">
          <Topics />
        </div>
        <div className="flex flex-col gap-[8px] text-[#ccc] py-4">
          <QuestionsTable questions={questions} />
        </div>
      </div>
    </section>
  );
};

export default ProblemsListPage;
