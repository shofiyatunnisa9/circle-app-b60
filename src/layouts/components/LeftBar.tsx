import { CircleUser, Heart, Home, LogOut, UserRoundSearch } from "lucide-react";
import { Link } from "react-router-dom";
import CreateDialog from "@/components/dialog/CreateDialog";

function LeftBar() {
  return (
    <div className="w-1/5 text-white p-4 border-gray-700">
      <div className="fixed">
        <h1 className="text-5xl text-green-400 font-bold mb-7 ">circle</h1>
        <ul className="ml-2 items-center gap-2">
          <p className="flex items-center gap-2 p-2 bg-gray-900 text-white">
            <Home size={20} />
            <Link to={"/"}>Home</Link>
          </p>
          <p className="flex items-center gap-2 p-2 bg-gray-900 text-white">
            <UserRoundSearch size={20} />
            <Link to={"/search"}>Search</Link>
          </p>
          <p className="flex items-center gap-2 p-2 bg-gray-900 text-white">
            <Heart size={20} />
            <Link to={"/follow"}>Follow</Link>
          </p>
          <p className="flex items-center gap-2 p-2 bg-gray-900 text-white">
            <CircleUser size={20} />
            <Link to={"/profile"}>Profile</Link>
          </p>
        </ul>

        <CreateDialog />

        <p className="flex items-center gap-2 p-2 my-75 bg-gray-900 text-white">
          <LogOut size={20} />
          <Link to={"/logout"}>Logout</Link>
        </p>
      </div>
    </div>
  );
}

export default LeftBar;
