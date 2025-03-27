import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import "../components/auth/LoginForm";

const Register = () => {
  return (
    <div className="grid w-screen h-screen gap-3 p-40 place-content-center bg-gray-950 ">
      <h1 className="text-5xl text-green-400 ">circle</h1>
      <p className="text-white">Create account Circle</p>
      <p></p>
      <Input className="w-sm" type="name" id="name" placeholder="Fullname" />
      <Input type="email" id="email" placeholder="Email" />
      <Input type="password" id="password" placeholder="Password" />
      <Button className="basis-128 bg-green-400">Create</Button>
      <p className="text-left text-white">
        Already have account ?{" "}
        <a className="text-green-400" href={"/login"}>
          Login
        </a>
      </p>
    </div>
  );
};

export default Register;
