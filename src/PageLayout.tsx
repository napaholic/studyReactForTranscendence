import React, { useState } from "react";
import logo from "./logo.svg";
import { Outlet } from "react-router-dom";
import "./PageLayout.css";
import Navbar from "./components/Navbar";

function PageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default PageLayout;
