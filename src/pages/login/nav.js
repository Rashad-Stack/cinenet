import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="container px-6 py-3 mx-auto md:flex justify-between">
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
    </nav>
  );
};

export default Nav;
