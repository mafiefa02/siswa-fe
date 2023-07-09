"use client";

import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import logo from "@/../public/logoOSM.png";
import { cn } from "@/lib/utils";

import ThemeSwitch from "../theme-switch";
import { H1, H2, H3 } from "../typography";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "w-full bg-primary/5 dark:bg-background/70 shadow-md sticky top-0 backdrop-blur z-50",
        pathname === "/" && "fixed top-0"
      )}
    >
      <nav className="container w-full py-4 px-8 flex flex-row items-center justify-between">
        <Link href="/" passHref>
          <div className="flex flex-row gap-4 items-center">
            <Image
              className="sm:inline hidden"
              src={logo}
              alt="OSM"
              width={28}
              height={28}
            />
            <p
              className={cn(
                "text-2xl font-black text-primary",
                pathname === "/" && "text-background dark:text-foreground"
              )}
            >
              SANTRIB
            </p>
          </div>
        </Link>

        <div className="flex flex-row w-max items-center gap-2">
          <ThemeSwitch
            className={cn(
              "mr-2",
              pathname === "/" && "text-background dark:text-foreground"
            )}
          />
          <Button asChild>
            <Link href={"/search"}>Login</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
