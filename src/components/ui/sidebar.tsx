"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
  onClick?: () => void;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp ?? openState;
  const setOpen = setOpenProp ?? setOpenState;

  const contextValue = React.useMemo(() => ({ open, setOpen, animate: animate }), [open, setOpen, animate]);

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  const getWidth = () => {
    if (!animate) return "300px";
    return open ? "300px" : "60px";
  };
  const width = getWidth();
  
  return (
    <motion.div
      className={cn(
        "h-full px-3 py-4 hidden md:flex md:flex-col bg-brand-dark border-r border-gray-800 w-[300px] shrink-0",
        className
      )}
      animate={{
        width,
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className={cn(
        "h-12 px-4 py-3 flex flex-row md:hidden items-center justify-between bg-brand-dark border-b border-gray-800 w-full"
      )}
      {...props}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-brand-green" />
          <span className="text-white font-medium text-sm">RideHail</span>
        </div>
        <button
          type="button"
          className="text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <IconMenu2 className="w-6 h-6" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed h-full w-full inset-0 bg-brand-black p-6 z-[100] flex flex-col justify-between",
              className
            )}
          >
            <button
              type="button"
              className="absolute right-6 top-6 z-50 text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Close menu"
            >
              <IconX className="w-6 h-6" />
            </button>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
}) => {
  const { open, animate } = useSidebar();
  
  const getDisplay = () => {
    if (!animate) return "inline-block";
    return open ? "inline-block" : "none";
  };
  
  const getOpacity = () => {
    if (!animate) return 1;
    return open ? 1 : 0;
  };
  
  return (
    <a
      href={link.href}
      onClick={(e) => {
        if (link.onClick) {
          e.preventDefault();
          link.onClick();
        }
      }}
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar py-2 cursor-pointer",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: getDisplay(),
          opacity: getOpacity(),
        }}
        className="text-gray-300 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </a>
  );
};
