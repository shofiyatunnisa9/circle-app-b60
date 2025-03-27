// import {
//   CircleUser,
//   Heart,
//   Home,
//   ImagePlus,
//   LogOut,
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
// import { Button } from "@/components/ui/button";
// import { useUserStore } from "@/stores/auth";

// // Menu items.
// const items = [
//   {
//     title: "Home",
//     url: "/",
//     icon: Home,
//   },
//   {
//     title: "Search",
//     url: "/search",
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
// const itemsLogout = [
//   {
//     title: "Logout",
//     url: "/login",
//     icon: LogOut,
//   },
// ];

// function LeftBar() {
//   const { clearUser } = useUserStore();
//   return (
//     <SidebarProvider>
//       <div className="flex bg-gray-950 w-screen h-screen">
//         //sidebar left
//         <Sidebar className="w-1/3.5 min-w-[150px] p-4">
//           <SidebarContent className="bg-gray-950 text-white">
//             <SidebarGroup>
//               <SidebarGroupLabel className="text-5xl text-green-400 py-10">
//                 circle
//               </SidebarGroupLabel>
//               <SidebarGroupContent>
//                 <SidebarMenu>
//                   {items.map((item) => (
//                     <SidebarMenuItem key={item.title}>
//                       <SidebarMenuButton asChild>
//                         <a href={item.url}>
//                           <item.icon />
//                           <span>{item.title}</span>
//                         </a>
//                       </SidebarMenuButton>
//                     </SidebarMenuItem>
//                   ))}
//                 </SidebarMenu>
//                 <Button className="items-center basis-128 bg-green-500 m-5 p-3 w-50 rounded-3xl">
//                   Create Post
//                 </Button>
//                 <p className="">
//                   <SidebarMenu>
//                     {itemsLogout.map((item) => (
//                       <SidebarMenuItem key={item.title}>
//                         <SidebarMenuButton asChild>
//                           <a href={item.url}>
//                             <item.icon />
//                             <span>{item.title}</span>
//                           </a>
//                         </SidebarMenuButton>
//                       </SidebarMenuItem>
//                     ))}
//                   </SidebarMenu>
//                 </p>
//                 {/* <Button
//                   onClick={clearUser}
//                   className="items-center basis-128 bg-green-500 m-5 p-3 w-50 rounded-3xl"
//                 >
//                   Logout
//                 </Button> */}
//               </SidebarGroupContent>
//             </SidebarGroup>
//           </SidebarContent>
//         </Sidebar>
//       </div>
//     </SidebarProvider>
//   );
// }

// export default LeftBar;

import React from "react";
import { CircleUser, Heart, Home, LogOut, UserRoundSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Search",
    url: "/search",
    icon: UserRoundSearch,
  },
  {
    title: "Follow",
    url: "/follow",
    icon: Heart,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: CircleUser,
  },
];
const itemsLogout = [
  {
    title: "Logout",
    url: "/login",
    icon: LogOut,
  },
];

function LeftBar() {
  return (
    <div className="w-1/5 bg-gray-900 text-white h-screen p-5 ">
      <h1 className="text-5xl text-green-400 font-bold mb-10">circle</h1>
      <ul>
        {items.map((item) => (
          <li key={item.title} className="mb-4 flex items-center gap-2">
            <item.icon size={20} />
            <a href={item.url} className="text-lg">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <Button className="items-center basis-128 bg-green-500 m-5 p-3 w-50 rounded-3xl">
        Create Post{" "}
      </Button>
      {/* <button className="mt-10 bg-green-500 text-white px-4 py-2 rounded-lg">
        Create Post
      </button> */}
      <ul className="my-70">
        {itemsLogout.map((item) => (
          <li key={item.title} className="mb-4 flex items-center gap-2">
            <item.icon size={20} />
            <a href={item.url} className="text-lg">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftBar;
