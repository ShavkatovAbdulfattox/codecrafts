import React from "react";
import Solved from "./Solved/Solved";
import Badges from "./Badges/Badges";

import Calendar from "./Calendar/Calendar";
import Actions from "./Actions/Actions";
function RightSide() {
  return (
    <aside className="flex-1">
      <div className="flex gap-5">
        <Solved />
        <Badges />
      </div>
      <Calendar />
      <Actions />
    </aside>
  );
}

export default RightSide;
