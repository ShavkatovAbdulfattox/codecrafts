import { Tabs, Tag } from 'antd';
import { memo } from 'react';

const ProblemLeftSide = () => {

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
               children: `Content of Tab Pane 2`,
          },
          {
               key: '3',
               label: `Yuborigan javoblar`,
               children: `Content of Tab Pane 3`,
          },
     ];

     return (
          <section className="left-side">
               <div className="left-side__header">
                    <Tabs size="small" defaultActiveKey="1" items={items} onChange={onChangeTab} />
               </div>
               <div className="left-side__body">
                    <h2>209. Misol maksimal sonni topish</h2>
                    <Tag color="orange" style={{ borderRadius: "50px", padding: "2px 15px" }}>Oson</Tag>
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