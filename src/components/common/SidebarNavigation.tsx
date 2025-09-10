"use client";
import React, { useState } from "react";
import Link from "next/link";
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

interface SidebarNavigationProps {
  readonly children: React.ReactNode;
}

export default function SidebarNavigation({ children }: SidebarNavigationProps) {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Story",
      href: "/#story-cards",
      icon: (
        <IconCar className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Simulations",
      href: "/#interactive-demo",
      icon: (
        <IconUsers className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Dashboard",
      href: "/#live-dashboard",
      icon: (
        <IconChartBar className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Safety",
      href: "/#safety",
      icon: (
        <IconBell className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "Advertisers",
      href: "/#advertisers",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
    {
      label: "About",
      href: "/#about",
      icon: (
        <IconHelp className="h-5 w-5 shrink-0 text-brand-green" />
      ),
    },
  ];
  
  const [open, setOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex h-screen bg-brand-black">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-6 md:gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-6 md:mt-8 flex flex-col gap-2">
              {links.map((link) => (
                <SidebarLink 
                  key={link.label} 
                  link={{
                    ...link,
                    href: "#",
                    onClick: () => scrollToSection(link.href)
                  }}
                />
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <SidebarLink
              link={{
                label: "RideHail User",
                href: "#",
                icon: (
                  <div className="h-7 w-7 shrink-0 rounded-full bg-brand-green flex items-center justify-center">
                    <span className="text-brand-black font-bold text-sm">R</span>
                  </div>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
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
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-brand-green" />
    </Link>
  );
};
