"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconHome,
  IconCar,
  IconUsers,
  IconChartBar,
  IconBell,
  IconSettings,
  IconHelp,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Rides",
      href: "#rides",
      icon: (
        <IconCar className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Drivers",
      href: "#drivers",
      icon: (
        <IconUsers className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Analytics",
      href: "#analytics",
      icon: (
        <IconChartBar className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Notifications",
      href: "#notifications",
      icon: (
        <IconBell className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Settings",
      href: "#settings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Help",
      href: "#help",
      icon: (
        <IconHelp className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-gray-800 bg-brand-black md:flex-row",
        "h-screen", // Full screen height for navigation
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link) => (
                <SidebarLink key={link.label} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Admin User",
                href: "#",
                icon: (
                  <div className="h-7 w-7 shrink-0 rounded-full bg-brand-green flex items-center justify-center">
                    <span className="text-brand-black font-bold text-sm">A</span>
                  </div>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-brand-green" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-white"
      >
        RideHail
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-brand-green" />
    </a>
  );
};

// Main content area component
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-gray-800 bg-brand-dark p-2 md:p-10">
        <div className="flex gap-2">
          {[...new Array(4)].map((i, idx) => (
            <div
              key={"first-array-demo-1" + idx}
              className="h-20 w-full animate-pulse rounded-lg bg-brand-gray"
            ></div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-1" + idx}
              className="h-full w-full animate-pulse rounded-lg bg-brand-gray"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
