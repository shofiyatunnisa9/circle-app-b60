// import React from "react";
// import {
//   CircleUser,
//   Heart,
//   Home,
//   ImagePlus,
//   UserRoundSearch,
// } from "lucide-react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
// } from "@/components/ui/sidebar";
// import { title } from "process";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// // Menu items.
// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: UserRoundSearch,
//   },
//   {
//     title: "Follow",
//     url: "#",
//     icon: Heart,
//   },
//   {
//     title: "Profile",
//     url: "#",
//     icon: CircleUser,
//   },
// ];
// const itemImage = [
//   {
//     title: "Image",
//     url: "#",
//     icon: ImagePlus,
//   },
// ];
// function RightBar() {
//   return (
//     <SidebarProvider>
//       <div className="">
//         <Sidebar side="right" className=" w-1/3.5 min-w-[350px] p-4">
//           <SidebarContent className="bg-gray-950 text-white">
//             <SidebarGroup>
//               <SidebarGroupLabel></SidebarGroupLabel>
//               <SidebarGroupContent>
//                 <Card className="p-4 bg-gray-900 text-white w-[300px]  h-[320px] rounded-lg shadow-lg">
//                   <h2 className="text-lg font-semibold mb-2">My Profile</h2>

//                   {/* Banner */}
//                   {/* <div className="w-full h-20 rounded-lg bg-gradient-to-r from-orange-300 via-orange-700 to-orange-300 mb-[-60px]"></div> */}

//                   {/* Avatar & Edit Button */}
//                   <div className="flex justify-between items-center mt-2 px-4">
//                     <div>
//                       <Avatar>
//                         <AvatarImage src="https://github.com/shadcn.png" />
//                         <AvatarFallback>CN</AvatarFallback>
//                       </Avatar>
//                     </div>
//                     <Button
//                       variant={"outline"}
//                       className="text-sm bg-transparent rounded-3xl"
//                     >
//                       Edit Profile
//                     </Button>
//                   </div>

//                   {/* Profile Info */}
//                   <div className="mt-4 text-center">
//                     <h3 className="text-xl font-bold">✨ Shofiyatunnisa ✨</h3>
//                     <p className="text-gray-400">@shfytnsa</p>
//                     <p className="text-gray-300 text-sm mt-1">
//                       Hi ! welcome my page
//                     </p>
//                   </div>

//                   {/* Stats */}
//                   <div className="mt-3 flex justify-center space-x-4 text-gray-300 text-sm">
//                     <p>
//                       <span className="font-bold text-white">231</span>{" "}
//                       Following
//                     </p>
//                     <p>
//                       <span className="font-bold text-white">2k</span> Followers
//                     </p>
//                   </div>
//                 </Card>
//                 <br></br>
//                 <Card className="p-4 bg-gray-900 text-white w-[300px]  h-[320px] rounded-lg shadow-lg"></Card>
//               </SidebarGroupContent>
//             </SidebarGroup>
//           </SidebarContent>
//         </Sidebar>
//       </div>
//     </SidebarProvider>
//   );
// }

// export default RightBar;
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

function RightBar() {
  return (
    <div className="w-1/4 bg-gray-900 text-white h-screen p-5">
      {/* Profile Section */}
      <div className="bg-gray-800 p-4 rounded-lg pb-3">
        <h2 className="text-xl font-bold pb-2">My Profile</h2>
        <div className="w-full h-20 rounded-lg bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 mb-[-60px] "></div>

        {/* Avatar & Edit Button */}
        <div className="flex justify-between  items-center mt-2 px-4">
          <div className="">
            <Avatar>
              <AvatarImage
                className="rounded-full size-15 mt-5 "
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
      <div className="bg-gray-800 p-4 rounded-lg mt-5">
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
              <p>@lala212</p>
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
              <p>@mnyg93</p>
            </div>
            <Button className="bg-gray-700 px-3 py-1 rounded-lg">Follow</Button>
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
              <p>@sholasido2</p>
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
              <p>@kmnmjn94</p>
            </div>
            <Button className="bg-gray-700 px-3 py-1 mt-2 rounded-lg">
              Follow
            </Button>
          </div>
        </div>
      </div>

      {/* develop */}
      <div className="bg-gray-800 p-10 rounded-lg mt-5">
        <p></p>
      </div>
    </div>
  );
}

export default RightBar;
