/* eslint-disable react/prop-types */
import { Tabs, Tag } from 'antd';
import { memo } from 'react';
import { CorrectIcon, DislikeButton, LikeButton } from '../../../utils/icons';

const ProblemLeftSide = ({ question }) => {

     const onChangeTab = () => {
     }

     const items = [
          {
               key: '1',
               label: `Izoh`,
          },
          {
               key: '2',
               label: `Boshqa yechimlar`,
          },
          {
               key: '3',
               label: `Yuborigan javoblar`,
          },
     ];


     const level = {
          "easy": "Oson",
          undefined: "",
     }[question.level] ?? ''

     return (
          <section className="left-side">
               <div className="left-side__header">
                    <Tabs size="small" defaultActiveKey="1" items={items} onChange={onChangeTab} />
               </div>
               <div className="left-side__body">
                    <h1>{question.name}</h1>
                    <div className="left-side__info">
                         <Tag color="orange" style={{ borderRadius: "50px", padding: "2px 15px" }}>{level}</Tag>
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
                         Savolni ozi birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar
                         Savolni ozi birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar
                         Savolni ozi birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar
                         Savolni ozi birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar
                         Savolni ozi birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar birnimalar
                    </div>
               </div>
          </section>
     )
}

export default memo(ProblemLeftSide)