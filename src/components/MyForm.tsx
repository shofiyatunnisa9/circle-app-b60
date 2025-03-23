import React, { useContext, useState } from "react";
import "../assets/style/form-style.css";
import { AuthContext } from "../contexts/auth";

interface MyformState {
  username: string;
  email: string;
  phone: string;
}
function MyForm() {
  const { user, setUser } = useContext(AuthContext);
  const [formState, setFormState] = useState<MyformState>({
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);

    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(`Berikut data saya:`, formState);
    setUser(formState);
  };

  return (
    <form className="my-form bg-blue-300" onSubmit={handleSubmit}>
      <h1>My Form</h1>
      <input
        className="w-full border-2 p-1 rounded-xl border-b-blue-950 text-md"
        type="text"
        name="username"
        id="username"
        onChange={handleChange}
        placeholder="masukkan name"
      />
      <input
        className="w-full border-2 p-1 rounded-xl border-b-blue-950 text-md"
        type="text"
        name="email"
        id="email"
        onChange={handleChange}
        placeholder="masukkan email"
      />
      <input
        className="w-full border-2 p-1 rounded-xl border-b-blue-950 text-md"
        type="text"
        name="phone"
        id="phone"
        onChange={handleChange}
        placeholder="masukkan Phone"
      />
      <button
        className="text-white bg-blue-950 px-10 py-2 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default MyForm;
