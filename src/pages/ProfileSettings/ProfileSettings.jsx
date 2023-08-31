import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiFillEdit, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdKeyboardReturn, MdOutlineDownloadDone } from "react-icons/md";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useEditUserNameAndEmailMutation } from "../../services/userProfileApi";
import { baseURL } from "../../constants/apiConstants";

function ProfileSettings() {
  const { isLogged, userData } = useSelector((state) => state.user);
  const [isEditMode, setIsEditMode] = useState(false);

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [selectedFile, setSelectedFile] = useState(null);

  // ! The function below is choosing the picture and setting it to the state

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // const [editUser] = useEditUserNameAndEmailMutation();
  // // console.log(editUser());
  // const handleEditNameAndEmail = async () => {
  //   if (!isEditMode) {
  //     return;
  //   }
  //   if (!email.endsWith(".com")) {
  //     toast.warn("Iltimos email toliq yozing!", {
  //       theme: "dark",
  //     });
  //     return;
  //   }

  //   const response = await editUser({
  //     body: [{ email, name, picture: "", password: "" }],
  //     id: userData.id,
  //   });

  //   console.log("Response from API:", response);

  //   if (response.isSuccess) {
  //     console.log("User data successfully edited.");
  //     toast.success("Malumotlaringiz mofaqiyatli ozgartirildi!", {
  //       position: "top-right",
  //       autoClose: 3965,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //     console.log("Close the edit mode ");
  //     setIsEditMode(false);
  //   } else {
  //     console.log("User data edit failed.");
  //     // You might want to add an error toast or handle the error accordingly.
  //   }
  // };
  const handleEditNameAndEmail = async () => {
    try {
      if (!isEditMode) {
        return;
      }

      if (!email.endsWith(".com")) {
        toast.warn("Iltimos email to'liq yozing!", {
          theme: "dark",
        });
        return;
      }

      const response = await fetch(`${baseURL}/user/v1/update/${userData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          picture: "", // Add other properties as needed
          password: "", // Add other properties as needed
        }),
      });

      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        console.log("Response from API:", data);
        toast.success("Malumotlaringiz mofaqiyatli ozgartirildi!", {
          position: "top-right",
          autoClose: 3965,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setIsEditMode(false);
      } else {
        console.log("User data edit failed.");
        // Handle the error or show an appropriate error message
      }
    } catch (error) {
      console.error("Error editing user data:", error);
      // Handle the error or show an appropriate error message
    }
  };

  return (
    <>
      <header
        className="mt-10 container p-5 rounded-md"
        style={{
          backgroundColor: "rgb(40 40 40)",
        }}
      >
        <h1 className="text-3xl text-gray-300  font-Lexend">Account settngs</h1>
        <div className=" rounded-md p-5 pb-16 mt-10 ">
          <div className="flex justify-between items-center mb-10">
            <h2 className="uppercase font-Lexend font-bold tracking-wider text-xl ">
              MA'LUMOTLAR
            </h2>
            <div className="flex items-center gap-5">
              <motion.div
                whileTap={{ scale: 0.8 }}
                className={`text-4xl p-1 rounded-lg ${
                  isEditMode ? "bg-red-500" : "bg-yellow-500"
                }  cursor-pointer`}
              >
                {isEditMode ? (
                  <MdKeyboardReturn
                    onClick={(e) => {
                      const parentElement = e.target.parentNode;

                      if (parentElement) {
                        setName(userData.name);
                        setEmail(userData.email);
                        setIsEditMode(false);
                        toast.info("Xech nasra ozgartirilmadi", {
                          position: "top-right",
                          autoClose: 3965,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        });
                      }
                    }}
                  />
                ) : (
                  <AiFillEdit
                    className=""
                    onClick={(e) => {
                      const parentElement = e.target.parentNode;

                      if (parentElement) {
                        setIsEditMode(true);
                      }
                    }}
                  />
                )}
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  handleEditNameAndEmail();
                }}
                className={`text-4xl p-1 rounded-lg bg-emerald-500  ${
                  isEditMode
                    ? "opacity-100 cursor-pointer"
                    : " opacity-50 cursor-not-allowed"
                }`}
              >
                <MdOutlineDownloadDone />
              </motion.div>
            </div>
          </div>

          <form>
            <div className="flex justify-between gap-5">
              <div className="basis-[50%] flex flex-col">
                <label htmlFor="name" className="text-lg font-Lexend mb-4">
                  Ismingiz <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="backdrop bg-gray-900 h-8 rounded-xl font-LexendPeta p-5"
                  value={name}
                  onChange={(e) => {
                    if (!isEditMode) {
                      toast.warn("Iltimos ozgartirish tugmasini bosing!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                      return;
                    }
                    setName(e.target.value);
                  }}
                  id="name"
                />
              </div>

              <div className="basis-[50%] flex flex-col">
                <label htmlFor="Email" className="text-lg font-Lexend mb-4">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="Email"
                  value={email}
                  onChange={(e) => {
                    if (!isEditMode) {
                      toast.warn("Iltimos ozgartirish tugmasini bosing!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                      return;
                    }
                    setEmail(e.target.value);
                  }}
                  className="w-full backdrop bg-gray-900 h-8  rounded-xl font-LexendPeta p-5"
                />
              </div>
            </div>
            <div className="flex justify-between gap-5 mt-10">
              <div className="flex justify-between items-center w-[50%]">
                <label htmlFor="" className="font-Lexend text-sm flex gap-5">
                  Rasmingizni yuklang
                  <input
                    type="file"
                    accept="image/*"
                    className="cursor-pointer"
                    onChange={(e) => {
                      handleFileChange(e);
                    }}
                  />
                </label>
                <button
                  className="text bg-orange-400 font-Lexend py-1 px-5 rounded-lg"
                  onClick={(e) => {
                    updateUserPhoto(e, 2);
                  }}
                >
                  submit
                </button>
              </div>

              {/* <div className="basis-[50%] flex flex-col">
                <label htmlFor="name" className="text-lg font-Lexend mb-4">
                  Parol <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={isVisiblePassword ? "text" : "password"}
                    className={`backdrop bg-gray-900 h-8 rounded-xl font-Lexend p-5 ${
                      isVisiblePassword ? "text-xl" : "text-4xl"
                    } w-full`}
                    id="name"
                    value={userData.data.password}
                  />
                  {isVisiblePassword ? (
                    <AiFillEye
                      className="absolute text-lg top-3 right-5 cursor-pointer"
                      onClick={() => setIsVisiblePassword(false)}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      className="absolute text-lg top-3 right-5 cursor-pointer"
                      onClick={() => setIsVisiblePassword(true)}
                    />
                  )}
                </div>
              </div> */}
            </div>
          </form>
          {/* <input type="text" /> */}
        </div>
      </header>
      <main></main>
    </>
  );
}

export default ProfileSettings;
