import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { useUserStore } from "@/stores/auth";

function UserData() {
  const { user, setUser } = useUserStore();
  return (
    <section>
      <h2 className="text-3xl">Logged in User</h2>
      <p>Username : {user.username}</p>
      <p>Email : {user.email} </p>
      <p>Password: {user.password}</p>
    </section>
  );
}

export default UserData;
