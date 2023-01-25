import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Main;
