/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import { Tabs, Tag } from "antd";
import { memo, useState } from "react";
import { CorrectIcon, DislikeButton, LikeButton } from "../../../utils/icons";
import { getQuestionDifficulty } from "../../../utils/functions";
import ProblemLeftExampleCard from "./ProblemLeftExampleCard";

// problem data
import Tab3 from "./ProblemLeftData/ProblemLeftTabData";
import { Resizable } from "re-resizable";

const ProblemLeftSide = ({ question = {} }) => {
    const [rightWidth, setRightWidth] = useState(0);

    const onChangeTab = (key) => {
        // console.log(key);
    };

    const onResize = (a) => {
        setRightWidth(a.screenX);
    };

    const items = [
        {
            key: "1",
            label: `Izoh`,
            children: (
                <div className="left-side__body">
                    <div className="left-side__body--container">
                        <div className="left-side__body--box">
                            <h1>{question.name}</h1>
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
                                <button className="left-side__like">
                                    <LikeButton />
                                    <span>{question.like1}</span>
                                </button>
                                <button className="left-side__dislike">
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
                        <Resizable
                            className="playground-resizer"
                            enable={{
                                top: false,
                                right: true,
                                bottom: false,
                                left: false,
                                topRight: false,
                                bottomRight: false,
                                bottomLeft: false,
                                topLeft: false,
                            }}
                            maxHeight="55%"
                            onResize={onResize}
                            defaultSize={{
                                height: "40%",
                                width: "100%",
                            }}
                        >
                            <div className="left-side__submit">sUMOFINSD</div>
                        </Resizable>
                    </div>
                </div>
            ),
        },
        {
            key: "2",
            label: `Boshqa yechimlar`,
            children: `hey2`,
        },
        {
            key: "3",
            label: `Yuborigan javoblar`,
            children: <Tab3 />,
        },
    ];

    return (
        <section className="left-side">
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={items}
                onChange={onChangeTab}
            />
        </section>
    );
};

export default memo(ProblemLeftSide);
