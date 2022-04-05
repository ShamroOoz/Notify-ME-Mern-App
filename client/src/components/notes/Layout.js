import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ setIsLogin }) => {
  return (
    <>
      <NavBar setIsLogin={setIsLogin} />
      <Outlet />
    </>
  );
};

export default Layout;
