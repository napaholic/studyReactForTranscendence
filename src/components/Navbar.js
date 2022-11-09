import React, { useState } from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar";

const Navbar = () => {
  return (
    <nav class="w-full h-15 bg-cyan-600">
      <a
        class="w-24 bg-clip-border bg-indigo-500 text-2xl text-white font-pixel rounded-lg shadow-md hover:bg-indigo-600 hover:shadow-lg"
        href="http://localhost:3000"
      >
        Home
      </a>
      <a
        className="w-24 bg-clip-border bg-indigo-500 text-2xl text-white font-pixel rounded-lg shadow-md hover:bg-indigo-600 hover:shadow-lg"
        href="http://localhost:3000/modal"
      >
        Game
      </a>
      <a
        className="w-24 bg-clip-border bg-indigo-500 text-2xl text-white font-pixel rounded-lg shadow-md hover:bg-indigo-600 hover:shadow-lg"
        href="http://localhost:3000/login"
      >
        Login
      </a>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Sidebar />
      </div>
    </nav>
  );
};

function ChatMenu() {
  const [chat, setChat] = useState(false);
  const onClick = () => {
    setChat(!chat);
  };
  return (
    <div>
      <button
        onClick={() => {
          setChat((chat) => !chat);
        }}
      >
        채팅
      </button>
    </div>
  );
}

export default Navbar;
