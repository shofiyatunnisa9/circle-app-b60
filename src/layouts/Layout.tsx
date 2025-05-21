import React from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

interface AppLayoutProps {
  children: React.ReactNode; //component yang ada di dalam component tsb
}
function Layout({ children }: AppLayoutProps) {
  return (
    <div className="flex">
      <LeftBar />

      <section className="flex-1 border-x border-gray-700">{children}</section>

      <RightBar />
    </div>
  );
}

export default Layout;
