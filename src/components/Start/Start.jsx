import "./Start.scss";

function Start() {
    return (
        <section className="start-section isolate relative h-[80vh]">
            <div className="start-section-context container flex justify-center flex-grow ">
                <div className="flex flex-col justify-center items-center max-w-5xl w-full gap-9 relative">
                    <h1 className="start-section__title text-7xl text-white font-LexendPeta text-center max-[1200px]:text-4xl max-[500px]:text-[20px]">
                        <span className="font-LexendPeta text-8xl max-[1200px]:text-5xl max-[500px]:text-[28px]">Qiyinchilik orqali</span> <br/>{" "}
                        ustalikka erishing{" "}
                    </h1>
                    <p className="text-2xl text-white text-center font-Karla max-[1200px]:text-[18px]">
                        Kodlash amaliyotingizni doimiy ravishda sinovdan o'tkazadigan va
                        kuchaytiradigan kod kata bo'yicha tengdoshlaringiz bilan mashq
                        qilish orqali rivojlanish ko'nikmalaringizni yaxshilang.
                    </p>
                    <div className="shadow"></div>
                    <button className="font-Karla text-3xl text-white pushable max-[1200px]:text-[20px]">
                        <span className="front upp max-[1200px]:py-[5px] max-[1200px]:px-[30px]">Boshlash</span>
                    </button>
                </div>
            </div>

            <div className="area h-full w-full absolute top-[0] left-[0] right-[0] bottom-[0]">
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
