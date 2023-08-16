/* eslint-disable react/prop-types */
import { Tabs, Tag } from "antd";
import { memo } from "react";
import { CorrectIcon, DislikeButton, LikeButton } from "../../../utils/icons";
import { getQuestionDifficulty } from "../../../utils/functions";
import ProblemLeftExampleCard from "./ProblemLeftExampleCard";

const ProblemLeftSide = ({ question }) => {
     
  const onChangeTab = (key) => {
    // console.log(key);
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Izoh`,
      children: `hey1`,
    },
    {
      key: "2",
      label: `Boshqa yechimlar`,
      children: `hey2`,
    },
    {
      key: "3",
      label: `Yuborigan javoblar`,
      children: `hey3`,
    },
  ];

  return (
    <section className="left-side">
      <div className="left-side__header">
        <Tabs
          size="small"
          defaultActiveKey="1"
          items={items}
          onChange={onChangeTab}
        />
      </div>
      <div className="left-side__body">
        {/* <h1>{question.name}</h1>
        <div className="left-side__info">
          <Tag
            color="orange"
            style={{ borderRadius: "50px", padding: "2px 15px" }}
          >
            {getQuestionDifficulty(question.level)}
          </Tag>
          <CorrectIcon />
          <button className="left-side__like">
            <LikeButton />
            <span>{question.like1}</span>
          </button>
          <button className="left-side__dislike">
            <DislikeButton />
            <span>{question.dislike}</span>
          </button>
        </div>
        <div className="left-problem__text">{question.definition}</div>
        <div className="left-problem__examples">
          {question.exampleList?.map((example, index) => {
            return (
              <ProblemLeftExampleCard
                key={index}
                example={example}
                index={index}
              />
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default memo(ProblemLeftSide);
=======

     return (
          <section className="left-side">
               <div className="left-side__header">
                    <Tabs size="small" defaultActiveKey="1" items={items} onChange={onChangeTab} />
               </div>
               <div className="left-side__body">
                    <h1>{question.name}</h1>
                    <div className="left-side__info">
                         <Tag color="orange" style={{ borderRadius: "50px", padding: "2px 15px" }}>{getQuestionDifficulty(question.level)}</Tag>
                         <CorrectIcon />
                         <button className="left-side__like">
                              <LikeButton />
                              <span>{question.like1}</span>
                         </button>
                         <button className="left-side__dislike">
                              <DislikeButton />
                              <span>{question.dislike}</span>
                         </button>
                    </div>
                    <div className="left-problem__text" dangerouslySetInnerHTML={{ __html: question?.definition }}>
                    </div>
                    <div className="left-problem__examples">
                         {question.exampleList?.map((example, index) => {
                              return <ProblemLeftExampleCard key={index} example={example} index={index} />
                         })}
                    </div>
               </div>
          </section>
     )
}

export default memo(ProblemLeftSide)
>>>>>>> 39ca12b01b580687c7019e2f4b68941cb3935935
