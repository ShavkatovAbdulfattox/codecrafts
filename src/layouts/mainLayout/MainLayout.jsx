/** @format */

import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import "./mainLayout.scss";

const MainLayout = () => {
  return (
    <div className="global-layout">
      <Header />
      <main className="global-layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
