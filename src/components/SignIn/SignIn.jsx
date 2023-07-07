import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://myleetcode-6e7d4e375979.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);

      if ((response.status >= 200) & (response.status <= 300)) {
        // Login successful
        // Perform any necessary actions such as setting authentication tokens, user data, etc.
        navigate("/dashboard"); // Navigate to the dashboard or protected page
      } else {
        // Login failed
        console.error("Login failed:", data.error);
        // Handle the error, display a message, etc.
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle any network errors or other exceptions
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <article className="">
      <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="rounded-3xl dark:bg-gray-900 max-w-md w-full p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Akkauntizga kirin
          </h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
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
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
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
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start"></div>
              <a className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">
                Parol esdan chiqdimi?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => handleLogin(e)}
            >
              Akkountga Kirish
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex gap-5">
              Akkaunt yoqmi
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                onClick={() => handleSignUpClick()}
              >
                Regestratsiya
              </a>
            </p>
          </form>
        </div>
      </div>
    </article>
  );
}

export default SignIn;
