import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { magic } from "@/lib/magic_client";

const Profile = () => {
  const [isDropdown, setIsDropDown] = useState(false);
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { email } = await magic.user.getMetadata();
        if (email) {
          setUserEmail(email);
        }
      } catch (err) {
        console.error("Error retrieving email", err);
      }
    })();
  }, []);

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
    <div className="inline-flex items-stretch rounded-md border-gray-600 bg-black/25">
      <Link
        href="#"
        className="rounded-l-md px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 hover:text-gray-200"
      >
        {userEmail}
      </Link>
      <div className="relative">
        <button
          onClick={() => setIsDropDown(!isDropdown)}
          type="button"
          className="inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-700 px-2 text-gray-50 hover:bg-gray-600 hover:text-gray-50"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isDropdown && (
          <div
            className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-600 bg-black/25 shadow-lg"
            role="menu"
          >
            <div className="flow-root py-2">
              <div className="-my-2 divide-y divide-gray-100">
                <div className="p-2">
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-100 hover:text-red-700 hover:bg-red-50/75"
                    role="menuitem"
                    onClick={handleLogout}
                  >
                    <Image
                      src={"/static/icons/logout.svg"}
                      width={20}
                      height={20}
                      alt="nav close"
                      priority
                    />
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
