import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function Profile() {
  return (
    <main className="container flex p-5 gap-5">
      <LeftSide />
      <RightSide />
    </main>
  );
}

export default Profile;
