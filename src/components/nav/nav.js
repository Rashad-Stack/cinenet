"use client"; // this is a client component
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "./navitems";
import Profile from "./profile";

const Nav = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <nav className="fixed top-0 inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-b sm:from-black/95 sm:to-black/45 z-50 h-16">
      <div className="container px-6 py-3 mx-auto md:flex justify-between">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform lg:text-3xl hover:text-gray-700"
          >
            <Image
              src={"/static/logo.png"}
              width={100}
              height={100}
              alt="Cinenet"
              priority
              className="w-32 md:w-60 h-auto"
            />
          </Link>
          <div className="hidden md:block">
            <NavItems />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden gap-4">
            <button
              type="button"
              className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              onClick={() => setIsMobileMenu(!isMobileMenu)}
            >
              <Image
                src={
                  isMobileMenu
                    ? "/static/icons/Close.svg"
                    : "/static/icons/menu.svg"
                }
                width={10}
                height={10}
                alt="nav close"
                priority
                className="h-8 w-8"
              />
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Profile />
        </div>
      </div>
      {isMobileMenu && <NavItems />}
    </nav>
  );
};

export default Nav;
