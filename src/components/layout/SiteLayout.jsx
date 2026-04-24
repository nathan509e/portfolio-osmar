import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavbar from "./SiteNavbar";
import SiteFooter from "./SiteFooter";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <SiteNavbar />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}