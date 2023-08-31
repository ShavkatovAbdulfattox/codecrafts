/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import { Button, Tabs, Tag } from "antd";
import { memo, useEffect, useMemo, useState } from "react";
import { CorrectIcon, DislikeButton, LikeButton } from "../../../utils/icons";
import { getQuestionDifficulty } from "../../../utils/functions";
import ProblemLeftExampleCard from "./ProblemLeftExampleCard";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import Tab3 from "./ProblemLeftData/ProblemLeftTabData";
import EditorialTab from "./EditorialTab";
import {
  useDislikeMutation,
  useLikeMutation,
} from "../../../services/questionApi";
import { useNavigate, useParams } from "react-router-dom";

const ProblemLeftSide = ({ question = {} }) => {
  const [elementHeight, setHeight] = useState(0);
  const { id, selectedTabLabel } = useParams();
  const navigate = useNavigate();

  const [giveLike, { isLoading: isLiking }] = useLikeMutation();
  const [giveDislike, { isLoading: isDisliking }] = useDislikeMutation();

  const onChangeTab = (key) => {
    if (key) {
      // console.log(selectedTab.label);
      const url = `/problem/${id}/${key}/`;
      navigate(url);
    }
  };
  const onGiveLike = () => {
    giveLike({ questionId: id, userId: getUserData()?.id });
  };

  const onGiveDislike = () => {
    giveDislike({ questionId: id, userId: getUserData()?.id });
  };

  const DESCRIPTION_TAB_KEY = "description";
  const SOLUTIONS_TAB_KEY = "solutions";
  const SUBMISSIONS_TAB_KEY = "submissions";
  const EDITORIAL_TAB_KEY = "editorial";

  const items = [
    {
      key: DESCRIPTION_TAB_KEY,
      label: `Izoh`,
      children: (
        <div className="left-side__body">
          <h1>
            {question.name}{" "}
            {isLiking || isDisliking ? (
              <Spin style={{ marginInlineStart: "10px" }} />
            ) : (
              ""
            )}{" "}
          </h1>
          <div className="left-side__info">
            <Tag
              color="orange"
              style={{
                borderRadius: "50px",
                padding: "2px 15px",
              }}
            >
              {getQuestionDifficulty(question.level)}
            </Tag>
            <CorrectIcon />

            <button className="left-side__like" onClick={onGiveLike}>
              <LikeButton />
              <span>{question.like1}</span>
            </button>
            <button className="left-side__dislike" onClick={onGiveDislike}>
              <DislikeButton />
              <span>{question.dislike}</span>
            </button>
          </div>
          <div className="left-problem__text">
            <pre>{question.definition?.trim()}</pre>
          </div>
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
          </div>
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
          </div>
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
          </div>
        </div>
      ),
    },
    {
      key: EDITORIAL_TAB_KEY,
      label: `Editorial`,
      children: <EditorialTab />,
    },
    {
      key: SOLUTIONS_TAB_KEY,
      label: `Boshqa yechimlar`,
      children: `hey2`,
    },
    {
      key: SUBMISSIONS_TAB_KEY,
      label: `Yuborigan javoblar`,
      children: <Tab3 />,
    },
  ];

  return (
    <section className="problem-left-container h-full flex w-full">
      <ReflexContainer
        orientation="horizontal"
        className="h-full w-full flex flex-col"
      >
        <ReflexElement style={{ overflow: "hidden" }}>
          <div className="left-side">
            <Tabs
              // defaultActiveKey={match.params.source}
              size="small"
              defaultActiveKey={selectedTabLabel}
              activeKey={selectedTabLabel}
              onChange={onChangeTab}
              items={items}
            />
          </div>
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement size={150} minSize={150}>
          <div className="left-side__submit">
            <div className="left-side__toggler">Console v</div>
            <div className="left-side__actions">
              <Button size="small">Tekshirish</Button>
              <Button size="small">Javobni yuborish</Button>
            </div>
          </div>
        </ReflexElement>
      </ReflexContainer>
    </section>
  );
};

export default memo(ProblemLeftSide);
