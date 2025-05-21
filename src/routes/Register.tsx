import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../components/auth/LoginForm";
import { Link } from "react-router-dom";

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
      <div>
        <p className="text-white text-left">
          Already have account ?
          <Link className="text-green-400" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
