"use client";

import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/../public/logoOSM.png";

import ThemeSwitch from "../theme-switch";
import { H1, H2, H3 } from "../typography";
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
  return (
    <div className="w-full bg-primary-container/10 shadow-md backdrop-blur sticky top-0 z-50">
      <nav className="w-full py-4 px-8 flex flex-row justify-between">
        <Link href="/" passHref>
          <div className="sm:flex hidden flex-row gap-2 items-center">
            <Image src={logo} alt="OSM" width={28} height={28} />
            <H3 className="tracking-tighter text-primary">SANTRIB</H3>
            {/*<p className="tracking-widest text-xs font-extrabold leading-none text-primary">
              SANTRIB
              <span className="block font-light text-xs tracking-tighter text-primary">
                Santri Tertib
              </span>
            </p>*/}
          </div>
        </Link>

        <div className="flex flex-row sm:w-max w-full items-center gap-2">
          {/*<SearchIcon />
          <Input className="sm:w-max w-full" placeholder="Search" />*/}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="border">
                  <MenuIcon />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/siswa" passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Siswa
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
}
