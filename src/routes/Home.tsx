import React from "react";
import MyCounter from "../components/MyCounter";
import MyForm from "../components/MyForm";
import UserData from "../components/UserData";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main
      style={{
        width: "50%",
        alignItems: "center",
      }}
    >
      <NavLink to="/about">Ke Halaman About</NavLink>
      <UserData />
      <MyCounter />
      <MyForm />
    </main>
  );
}

export default Home;
