import React from "react";
import { Outlet } from "react-router";
import Tophead from "./../components/common/topHeader";
import Menu from "../components/common/Menu";
import Sitefooter from "./../components/common/footer";

const MainLayout = () => {
  return (
    <>
      <Tophead />
      <Menu />
      <main className="main-content">
        <Outlet />
      </main>
      <Sitefooter />
    </>
  );
};

export default MainLayout;
