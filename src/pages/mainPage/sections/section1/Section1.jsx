import React from "react";
import classes from "./Section1.module.scss";
import icon1 from "../../../../assets/icons/image-removebg-preview.png";
import icon2 from "../../../../assets/icons/image-removebg-preview1.png";
import icon3 from "../../../../assets/icons/image-removebg-preview2.png";
import img1 from "../../../../assets/images/634813675d2ae160b2b9a350_next-challenge-3.png";
import img2 from "../../../../assets/images/63ac9f2a7a881d6fb494f6cf_Training_on_Unique_In_Order___Codewars.jpeg";
import img3 from "../../../../assets/images/631b55799dd8830b7f6ba9e0_ranks.png";

function Section1() {
  const data = {
    cardContent: [
      {
        title: `Kodlash mahoratingizni oshiring`,
        text: `"Kata" deb nomlangan kichik kodlash mashqlarida o'zingizni sinab ko'ring. Har bir kata hamjamiyat tomonidan turli xil kodlash usullarini kuchaytirishga yordam berish uchun yaratilgan. Joriy tanlagan tilingizni o‘zlashtiring yoki qo‘llab-quvvatlanadigan 55+ dasturlash tillaridan birini tezda tanlang.`,
        img: img1,
        icon: icon1,
        style: { background: "linear-gradient(to right, #42312c, #452225)", gridColumn: "span 5" },
        alignment: "horizontal",
        link: { title: "Join the CodeXbirbalo", to: "/" },
      },
      {
        title: `Tezkor fikr-mulohaza oling`,
        text: `Brauzerda o'zingizning kodlash uslubingiz bilan kata ni hal qiling va rivojlanish jarayonida uni tekshirish uchun test holatlaridan (TDD) foydalaning. Yangi, ijodiy va optimallashtirilgan yondashuvlar bilan qayta o'qing. Dasturlash amaliyotingizdagi barcha xatolarni toping.`,
        img: img2,
        icon: icon2,
        style: { background: "#222326", gridColumn: "span 2" },
        absoluteImg: false,
        alignment: "vertical",
      },
      {
        title: `Darajalar va shon-sharafga ega bo'ling`,
        text: `Kata kodi muammolari boshlang'ichdan ekspert darajasiga qadar tartiblangan. Yuqori darajali katalarni tugatganingizdan so'ng, siz o'z profilingizni yuqori darajaga ko'tarasiz va dasturiy ta'minotni ishlab chiqish ko'nikmalaringizni eng yuqori potentsialga olib chiqasiz.`,
        img: img3,
        icon: icon3,
        style: { background: "#222326", gridColumn: "span 3" },
        absoluteImg: true,
        alignment: "vertical",
      },
    ],
  };

  return (
    <section className={classes.s1}>
      <div className="container">
        <div className={classes.s1Content}>
          {/*  */}
          {data.cardContent.map((item, index) => {
            return (
              <div
                className={item.alignment == "horizontal" ? classes.horizontalCard : classes.verticalCard}
                style={item.style}
                key={index}
              >
                <div className={classes.cardContent} horizontal={item.alignment == "horizontal" ? "true" : "false"}>
                  <img src={item.icon} className={classes.cardIcon} alt="" />
                  <h3 className={classes.cardTitle}>{item.title}</h3>
                  <p className={classes.cardText}>{item.text}</p>
                  {item.link ? (
                    <a href={item.link.to} className={classes.cardLink}>
                      {item.link.title}
                    </a>
                  ) : null}
                  {!item.absoluteImg && item.alignment !== "horizontal" ? (
                    <img src={item.img} className={classes.relativeImg} draggable="false" />
                  ) : null}
                </div>

                {/*  */}
                {item.absoluteImg || item.alignment == "horizontal" ? (
                  <img src={item.img} alt="" draggable="false" data-main-img="true" />
                ) : null}
                <div className={classes.cardNoise} />
              </div>
            );
          })}
          {/*  */}
        </div>
      </div>
    </section>
  );
}

export default Section1;
