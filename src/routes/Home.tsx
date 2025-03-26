import React from "react";
import MyCounter from "../components/MyCounter";
import MyForm from "../components/MyForm";
import UserData from "../components/UserData";
import { NavLink } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "./Register";
import Layout from "@/layouts/Layout";

function Home() {
  return (
    <main
      style={{
        width: "50%",
        alignItems: "center",
      }}
    >
      <NavLink to="/login">Ke Halaman Login</NavLink>
      {/* <Login />
      <Register /> */}
      {/* <Layout children={undefined} /> */}
      {/* <UserData /> */}
      {/* <MyCounter /> */}
      {/* <MyForm /> */}
    </main>
  );
}

export default Home;
