import React from "react";

function ProfileSettings() {
  return (
    <>
      <header className="mt-10 container">
        <h1 className="text-3xl text-gray-300  font-Lexend">Account settngs</h1>

        <div className="bg-gray-800 rounded-md p-5 mt-5">
          <h2 className="uppercase font-Karla font-bold tracking-wider text-xl">
            Information
          </h2>
          <form action="">
            <div className="flex justify-between gap-5">
              <div className="basis-[50%] flex flex-col">
                <label htmlFor="Email">Email</label>
                <input type="text" className="w-96 backdrop bg-gray-900 h-8" />
              </div>

              <div className="basis-[50%]">
                <label htmlFor="Email">Email</label>
                <input type="text" className="w-full backdrop bg-gray-900 h-8" />
              </div>
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
