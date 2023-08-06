import "./Start.scss";

function Start() {
    return (
        <section className="start-section isolate relative h-[80vh]">
            <div className="start-section-context flex justify-center flex-grow ">
                <div className="flex flex-col justify-center items-center max-w-5xl w-full gap-9 relative">
                    <h1 className="start-section__title text-7xl text-white font-LexendPeta text-center">
                        <span className="font-LexendPeta text-8xl">Qiyinchilik orqali</span> <br/>{" "}
                        ustalikka erishing{" "}
                    </h1>
                    <p className="text-2xl text-white text-center font-Karla ">
                        Kodlash amaliyotingizni doimiy ravishda sinovdan o'tkazadigan va
                        kuchaytiradigan kod kata bo'yicha tengdoshlaringiz bilan mashq
                        qilish orqali rivojlanish ko'nikmalaringizni yaxshilang.
                    </p>
                    <div className="shadow"></div>
                    <button className="font-Karla  text-3xl text-white pushable">
                        <span className="front upp">Boshlash</span>
                    </button>
                </div>
            </div>

            <div className="area h-full w-full">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    );
}

export default Start;
