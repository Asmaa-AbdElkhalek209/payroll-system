"use client";

import Navbar from "@/shared/components/layout/Navbar";
import Sidebar from "@/shared/components/layout/Sidebar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={open} />

      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={() => setOpen(!open)} />

        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
