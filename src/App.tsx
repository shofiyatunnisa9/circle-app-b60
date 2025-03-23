import { useEffect, useState } from "react";
import "./assets/style/form-style.css"; //memanggil file css tanpa link

import MyCounter from "./components/MyCounter";
import { AuthProvider } from "./contexts/auth";
import Home from "./routes/Home";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

interface User {
  username: string;
  phone: string;
  email: string;
}
//component app
function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          setUsers(data);
        }, 3000)
      );
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
