import React, { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "../../contexts/auth";
// import { useNavigate } from "react-router-dom";
import "../../routes/Register";
import "../../routes/Forgot";
import { useUserStore } from "@/stores/auth";
interface LoginFormState {
  username: string;
  email: string;
  password: string;
}

function LoginForm() {
  const { user, setUser } = useUserStore();
  // const navigate = useNavigate();

  const [formState, setFormState] = useState<LoginFormState>({
    username: "username not found",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);

    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Halo berikut data saya :`, formState); // object yang berisi data form : username, email, phone
    setUser(formState);
    // navigate("/");
  };
  return (
    <form
      className="grid w-screen h-screen gap-3 p-40 place-content-center bg-gray-950  "
      onSubmit={handleSubmit}
    >
      <h1 className="text-5xl text-green-400 ">circle</h1>
      <p className="text-white">Login to Circle</p>
      <p></p>
      <Input
        className="w-sm text-white"
        type="username"
        id="username"
        onChange={handleChange}
        placeholder="Username"
      />
      <Input
        className="w-sm text-white"
        type="email"
        id="email"
        onChange={handleChange}
        placeholder="Email/Username"
      />
      <Input
        className="w-sm text-white"
        type="passwors"
        id="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <a className="text-white text-right text-sm " href={"/forgot"}>
        Forgot Password
      </a>
      {/* <p className="text-right text-sm text-white">Forgot Password</p> */}
      <Button className="basis-128 bg-green-400" type="submit">
        Submit
      </Button>
      <p className="text-left text-white">
        Don't have an account yet ?{" "}
        <a className="text-green-400" href={"/register"}>
          Register
        </a>
        {/* <Button variant="link" className="text-green-400">
          Register
        </Button> */}
      </p>
    </form>
  );
}

export default LoginForm;
