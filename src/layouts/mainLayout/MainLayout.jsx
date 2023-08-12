/** @format */

import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import Navigation from "../../components/navbar/Navigation";
import "./mainLayout.scss";

const MainLayout = () => {
  return (
    <div className="global-layout">
      <Navigation />

      <main className="global-layout__main">
        <Outlet />
      </main>

    </div>
  );
};
export default MainLayout;
