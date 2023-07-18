import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!formData.email && !formData.name && !formData.password) {
      toast.error("Iltimos bosh joylarni toldiring ?!",{
        theme: "dark",
      });

      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(response.status);
      console.log(response);
      console.log(data);

      if ((response.status >= 200) & (response.status <= 300)) {
        // Registration successful
        navigate("/login"); // Navigate to the login page
        toast.success("Regestratsiyadan mufaqiyatli otingiz",{
          theme: "dark",
        });
      } else {
        // Registration failed
        console.error("Registration failed:", data.error);
        toast.error(data.message,{ theme: "dark",});

        // Handle the error, display a message, etc.
      }
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle any network errors or other exceptions
    }
  };

  function handleSignClick() {
    navigate("/login");
  }

  return (
    <article className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8  max-w-md w-full  dark:bg-gray-900 rounded-3xl">
          <h1 className="text-xl tracking-wide leading-tight  text-gray-900 md:text-2xl dark:text-white  font-Lexend">
            Regestratsiya
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
                  setFormData({ ...formData, name: e.target.value })
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
                  setFormData({ ...formData, email: e.target.value })
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
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-Lexend"
              onClick={(e) => handleSignUp(e)}
            >
              Regestratsiyadan otish
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex gap-5 font-Karla">
              Akkauntiz bormi ?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500 font-Lexend"
                onClick={() => handleSignClick()}
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
