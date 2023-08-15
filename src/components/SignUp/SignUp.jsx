import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./signUp.scss";
import {useRegisterMutation} from "../../services/authApi.js";
import {message, Spin} from "antd";
import {logIn} from "../../app/features/user/userSlice.js";
import {useDispatch} from "react-redux";


function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [registrate, {isLoading}] = useRegisterMutation();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.name || !formData.password) {
            message.error("Iltimos ma'lumotlarni kiriting!");
        } else {
            registrate(formData).unwrap()
                .then(res => {
                    message.success("Muvaffaqiyatli o'tdingiz")
                    dispatch(logIn(res.data));
                }).then(() => {
                navigate("/")
            }).catch(error => {
                message.error(error.data?.message);
            })
        }
    };

    function handleSignClick() {
        navigate("/login");
    }

    return (
        <article className="sign-up-page">
            <div className="sign-up-page-backimage"></div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="sign-up-page__form-container  p-6 space-y-4 md:space-y-6 sm:p-8  max-w-md w-full  dark:bg-gray-900 rounded-3xl">
                    <h1 className="sign-up__title text-xl tracking-wide leading-tight  text-gray-900 md:text-2xl  font-Lexend">
                        Registratsiya
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label
                                htmlFor="ism"
                                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white font-Karla"
                            >
                                Ismingiz
                            </label>
                            <input
                                type="text"
                                name="ism"
                                id="ism"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Axror"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({...formData, name: e.target.value})
                                }
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white font-Karla"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@gmail.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({...formData, email: e.target.value})
                                }
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white font-Karla"
                            >
                                Parol
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({...formData, password: e.target.value})
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-Lexend"
                            onClick={handleSignUp}
                        >
                            Registratsiyadan otish
                            {isLoading ? <Spin/> : ""}
                        </button>
                        <p className="sign-up-page__form-footer text-sm font-light text-gray-800 dark:text-gray-400 flex gap-5 font-Karla">
                            Akkauntiz bormi ?{" "}
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500 font-Lexend"
                                onClick={handleSignClick}
                            >
                                Kirish
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </article>
    );
}

export default SignUp;
