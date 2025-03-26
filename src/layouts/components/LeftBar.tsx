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

import { title } from "process";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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

function LeftBar() {
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
    </div>
  );
}

export default LeftBar;
