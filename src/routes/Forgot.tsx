import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../components/auth/LoginForm";
import React from "react";

const Forgot = () => {
  return (
    <div className="grid w-screen h-screen gap-3 p-40 place-content-center bg-gray-950 ">
      <h1 className="text-5xl text-green-400 ">circle</h1>
      <p className="text-white">Forget password</p>
      <Input
        className="w-sm"
        type="email"
        id="email"
        placeholder="Email/Username"
      />
      <Button className="basis-128 bg-green-400">Send Intruction</Button>
      <p className="text-left text-white">
        Already an account ?{" "}
        <a className="text-green-400" href={"/login"}>
          Login
        </a>
      </p>
    </div>
  );
};

export default Forgot;
