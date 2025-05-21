import React from "react";

function Follow() {
  return (
    <div className="bg-gray-900 h-screen text-white border-l border-gray-700">
      <h2 className="text-2xl font-bold p-5">Follows</h2>
      <div className="flex border-b border-gray-700 mt-2">
        <button className=" flex-1 py-3 px-4 text-white border-b-2 border-green-500 font-medium">
          Followers
        </button>
        <button className="flex-1 py-3 px-4 text-gray-400 hover:text-white">
          Following
        </button>
      </div>
    </div>
  );
}

export default Follow;
