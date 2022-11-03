import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import PageLayout from "./PageLayout";
import ModalFrame from "./components/ModalFrame";
import ProjectModal from "./components/ModalBasic";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/modal" element={<ProjectModal />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
