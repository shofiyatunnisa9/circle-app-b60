import React from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Home from "../routes/Home";

interface AppLayoutProps {
  children: React.ReactNode; //component yang ada di dalam component tsb
}
function Layout({ children }: AppLayoutProps) {
  return (
    <div className="flex">
      {/* SideBar Kiri */}
      <LeftBar />
      {/* Komponen Utama */}
      {/* <Home /> */}
      <section className="flex-1">{children}</section>
      {/* SideBar Kanan */}
      <RightBar />
    </div>
  );
}

export default Layout;
