import React from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

interface AppLayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: AppLayoutProps) {
  return (
    <div>
      {/* SideBar Kiri */}
      <LeftBar />
      {/* Komponen Utama */}
      <section className="flex-1">{children}</section>
      {/* SideBar Kanan */}
      <RightBar />
    </div>
  );
}

export default Layout;
