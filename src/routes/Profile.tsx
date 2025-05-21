import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ArrowLeft, Heart, MessageSquareText, Verified } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-gray-900 text-white p-5 h-screen overflow-auto">
      <div className="flex items-center gap-4 mb-6">
        <ArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
        <div>
          <h2 className="text-xl font-bold">✨ Shofiyatunnisa ✨</h2>
        </div>
      </div>

      <div className=" relative">
        <div className="h-32 w-full rounded-xl bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300" />

        <Avatar className="w-20 h-20 rounded-full border-4 border-gray-900 absolute -bottom-10 left-4 top-23">
          <AvatarImage
            className="rounded-full"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button
          variant={"outline"}
          className="text-sm bg-transparent rounded-3xl ml-145 mt-2  "
        >
          Edit Profile
        </Button>
      </div>

      <div className="mt-2 px-2 ">
        <h3 className="text-lg font-bold flex items-center gap-1">
          ✨ Shofiyatunnisa ✨
        </h3>
        <p className="text-gray-400 text-sm">@shfytnsa</p>
        <p className="mt-2 text-sm text-gray-300">
          Hello welcome to my pages !!
        </p>

        <div className="flex gap-4 mt-3 text-sm text-gray-400">
          <span>
            <span className="text-white font-medium">203</span> Following
          </span>
          <span>
            <span className="text-white font-medium">1k</span> Followers
          </span>
        </div>
      </div>

      <div className="flex border-b border-gray-700 mt-2">
        <button className=" flex-1 py-3 px-4 text-white border-b-2 border-green-500 font-medium">
          All Post
        </button>
        <button className="flex-1 py-3 px-4 text-gray-400 hover:text-white">
          Media
        </button>
      </div>
      {/* POST 1 */}
      <div className="space-y-6 mt-4">
        <div className="border-b border-gray-800 pb-4">
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarImage
                className="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <div className="flex items-center gap-1">
                <span className="font-medium">✨ Shofiyatunnisa ✨</span>
                <span className="text-gray-400 text-sm">@shfytnsa · 2h</span>
              </div>
              <p className="text-sm mt-1">Good morning world?!</p>
              <div className="flex text-gray-400 pt-1 gap-2 items-center">
                <Heart size={18} />
                <span>34</span>
                <MessageSquareText size={18} />
                <span>20 Replies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POST 2 */}
      <div className="space-y-6 mt-4">
        <div className="border-b border-gray-800 pb-4">
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarImage
                className="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <div className="flex items-center gap-1">
                <span className="font-medium">✨ Shofiyatunnisa ✨</span>
                <span className="text-gray-400 text-sm">@shfytnsa · 4h</span>
              </div>
              <p className="text-sm mt-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                voluptatem illo explicabo nihil et cum tempora ipsam soluta
              </p>
              <p className="text-sm mt-2 mb-2">
                consequatur molestias. Lorem ipsum dolor sit amet.🌻🌻
              </p>
              <img
                className="h-50 w-80 rounded-md "
                src="https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
              />
              <div className="flex text-gray-400 pt-1 gap-2 items-center">
                <Heart size={18} />
                <span>140</span>
                <MessageSquareText size={18} />
                <span>99 Replies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
