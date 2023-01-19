import { magic } from "@/lib/magic_client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Profile from "./profile";

const NavItems = () => {
  const router = useRouter();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await magic.user.logout();
      console.log(await magic.user.isLoggedIn());
      router.push("/login");
    } catch (err) {
      console.error("Error retrieving email", err);
    }
  };
  return (
    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black/90 md:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
      <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
        <Link
          href="#"
          className="px-2.5 py-2 text-gray-100 transition-colors duration-300 transform rounded-lg hover:bg-gray-800/75 md:mx-2"
        >
          Home
        </Link>
        <Link
          href="/movies"
          className="px-2.5 py-2 text-gray-100 transition-colors duration-300 transform rounded-lg hover:bg-gray-800/75 md:mx-2"
        >
          Movies
        </Link>
        <Link
          href="/series"
          className="px-2.5 py-2 text-gray-100 transition-colors duration-300 transform rounded-lg hover:bg-gray-800/75 md:mx-2"
        >
          Series
        </Link>
        <Link
          href="/latest"
          className="px-2.5 py-2 text-gray-100 transition-colors duration-300 transform rounded-lg hover:bg-gray-800/75 md:mx-2"
        >
          Coming Soon
        </Link>
        <Link
          href="/favorites"
          className="px-2.5 py-2 text-gray-100 transition-colors duration-300 transform rounded-lg hover:bg-gray-800/75 md:mx-2"
        >
          My List
        </Link>
        <button
          className="md:hidden w-32 rounded bg-rose-600 px-4 py-3 text-base font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 tracking-wide"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default NavItems;
