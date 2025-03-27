import {
  CircleUser,
  Heart,
  Home,
  ImagePlus,
  UserRoundSearch,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { title } from "process";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: UserRoundSearch,
  },
  {
    title: "Follow",
    url: "#",
    icon: Heart,
  },
  {
    title: "Profile",
    url: "#",
    icon: CircleUser,
  },
];
const itemImage = [
  {
    title: "Image",
    url: "#",
    icon: ImagePlus,
  },
];
//menu base

export function AppSidebar() {
  return (
    <div className="flex bg-gray-950 w-screen h-screen">
      //sidebar left
      <Sidebar className="w-1/3.5 min-w-[150px] p-4">
        <SidebarContent className="bg-gray-950 text-white">
          <SidebarGroup>
            <SidebarGroupLabel className="text-5xl text-green-400 py-10">
              circle
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              <Button className="items-center basis-128 bg-green-500 m-5 p-3 w-50 rounded-3xl">
                Create Post
              </Button>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      ///sidebar right
      <Sidebar side="right" className=" w-1/3.5 min-w-[350px] p-4">
        <SidebarContent className="bg-gray-950 text-white">
          <SidebarGroup>
            <SidebarGroupLabel></SidebarGroupLabel>
            <SidebarGroupContent>
              <Card className="p-4 bg-gray-900 text-white w-[300px]  h-[320px] rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">My Profile</h2>

                {/* Banner */}
                {/* <div className="w-full h-20 rounded-lg bg-gradient-to-r from-orange-300 via-orange-700 to-orange-300 mb-[-60px]"></div> */}

                {/* Avatar & Edit Button */}
                <div className="flex justify-between items-center mt-2 px-4">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <Button
                    variant={"outline"}
                    className="text-sm bg-transparent rounded-3xl"
                  >
                    Edit Profile
                  </Button>
                </div>

                {/* Profile Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">✨ Shofiyatunnisa ✨</h3>
                  <p className="text-gray-400">@shfytnsa</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Hi ! welcome my page
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-3 flex justify-center space-x-4 text-gray-300 text-sm">
                  <p>
                    <span className="font-bold text-white">231</span> Following
                  </p>
                  <p>
                    <span className="font-bold text-white">2k</span> Followers
                  </p>
                </div>
              </Card>
              <br></br>
              <Card className="p-4 bg-gray-900 text-white w-[300px]  h-[320px] rounded-lg shadow-lg"></Card>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
