import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Facebook, GithubIcon, Instagram } from "lucide-react";

function RightBar() {
  return (
    <div className="w-1/4 text-white h-screen p-3">
      <div className=" fixed ">
        {/* Profile Section */}
        <div className="bg-gray-800 p-4 rounded-lg pb-3">
          <h2 className="text-xl font-bold pb-2">My Profile</h2>
          <div className="w-full h-20 rounded-lg bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 mb-[-60px] "></div>

          {/* Avatar & Edit Button */}
          <div className="flex justify-between  items-center mt-2 px-4">
            <div className="">
              <Avatar>
                <AvatarImage
                  className="rounded-full size-15 mt-5  border-gray-800 border-2"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button
                variant={"outline"}
                className="text-sm bg-transparent rounded-3xl ml-35 -mt-2.5 "
              >
                Edit Profile
              </Button>

              <p>✨shofiyatunnisa✨</p>
              <p className="text-gray-500">@shfytnsa</p>
              <p className="text-sm">Hello welcome to my pages !!</p>
              <div className=" flex text-sm gap-5">
                <p className="text-gray-500">
                  <span className="font-bold text-white"> 203</span> Following
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-white">1k</span> Followers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Users */}
        <div className="bg-gray-800 p-4 rounded-lg mt-3">
          <h2 className="font-bold">Suggested for you</h2>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-8"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="">
                  <p>Mohammed Jawahir</p>
                  <p className="text-sm -mt-1 text-gray-400">@em.jawahir</p>
                </div>
              </div>
              <Button className="bg-gray-700 px-3 py-1 rounded-lg" disabled>
                Following
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-8"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="">
                  <p>shakia Kimathi</p>
                  <p className="text-sm -mt-1 text-gray-400">@shakiakim</p>
                </div>
              </div>
              <Button className="bg-gray-700 px-3 py-1 rounded-lg">
                Follow
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-8"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="">
                  <p>Naveen Sighn</p>
                  <p className="text-sm -mt-1 text-gray-400">@naveeeen</p>
                </div>
              </div>
              <Button className="bg-gray-700 px-3 py-1 mt-2 rounded-lg">
                Follow
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-8"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p>shela meirah</p>
                  <p className="text-sm -mt-1 text-gray-400">@kmnmjn94</p>
                </div>
              </div>
              <Button className="bg-gray-700 px-3 py-1 mt-2 rounded-lg">
                Follow
              </Button>
            </div>
          </div>
        </div>

        {/* develop */}
        <div className="bg-gray-800 p-3 rounded-lg mt-3">
          <p className=" flex text-sm gap-1">
            Developed by Shofiyatunnisa •
            <GithubIcon size={20} className="items-center" />
            <Facebook size={20} />
            <Instagram size={20} />
          </p>
          <p className="text-gray-500 text-sm">
            Powered by Dumbways Indonesia • #CodingBootcamp
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
