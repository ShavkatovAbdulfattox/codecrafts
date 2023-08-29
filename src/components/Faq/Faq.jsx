import { AiFillEye } from "react-icons/ai";
import { FiFlag } from "react-icons/fi";
import { BsPersonWorkspace } from "react-icons/bs";

// import style

import style from "./Faq.module.scss";

const faq = [
  {
    title: "Yangi istiqbollarga ega bo'ling ",
    text: "Muammolarni hal qiling, keyin boshqalar xuddi shu muammoni qanday hal qilganini ko'ring. Dunyodagi eng malakali dasturchilardan yangi texnikalarni oling.",
    icon: <AiFillEye />,
  },
  {
    title: "Yangi tillarni o'rganing",
    text: "Muammolarni o'zingizga qulay bo'lgan tilda hal qiling, so'ngra uni yaxshilashni istagan tilda bajaring. Turli tillar bo'yicha darajani oshiring.",
    icon: <FiFlag />,
  },
  {
    title: "Tengdoshlar bilan raqobatlashing",
    text: "Do'stlaringiz, hamkasblaringiz va umuman jamiyat bilan raqobatlashing. Raqobat sizni hunaringizni egallashga undashi uchun ruxsat bering.",
    icon: <BsPersonWorkspace />,
  },
];
function Faq() {
  return (
    <section className="container">
      <h2 className="text-4xl text-center font-Lexend leading-tight max-[1000px]:text-3xl">
        Codewars-dan nima <br /> uchun foydalanishim mumkin?
      </h2>
      <p className="text-2xl text-center mt-5 font-Karla text-gray-300 max-[1000px]:text-[20px]">
        Boshlang'ichdan mutaxassisgacha va undan yuqori ...
      </p>

      <div className="grid grid-cols-3 gap-6 mt-10 max-[1000px]:flex max-[1000px]:flex-col">
        {faq.map((item, i) => {
          return (
            <div className={`${style.faq_item} flex flex-col p-10 `} key={i}>
              <div className="text-center text-2xl bg-orange-500 w-max p-2 rounded-lg ">
                {item.icon}
              </div>
              <h3 className="text-2xl font-Karla font-bold mt-6 mb-3">
                {item.title}
              </h3>
              <p className="text-sm font-Lexend text-gray-300">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
