"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import ProfileDropDown from "../Navbar/ProfileDropDown";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const { theme, setTheme } = useTheme();

  return (
    <header 
      className="
      bg-white/80 dark:bg-slate-950/80
      backdrop-blur-md
      border-b border-slate-200 dark:border-slate-800
      sticky top-0 z-50"
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <Link 
          className="font-extrabold text-slate-900 dark:text-slate-50 text-[28px]" 
          href={"/"}
        >
          <span className="text-blue-600 dark:text-blue-400">M</span>
          edi
          <span className="text-blue-600 dark:text-blue-400">Q</span>
          ueue
        </Link>

        <ul 
          className="hidden lg:flex font-medium gap-6 items-center text-slate-600 dark:text-slate-300"
        >
          <li
            className="hover:border-b hover:border-b-blue-600 dark:hover:border-b-blue-400 duration-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className="hover:border-b hover:border-b-blue-600 dark:hover:border-b-blue-400 duration-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Link href="/tutors">Tutors</Link>
          </li>

          {
            user && (
              <>
                <li
                  className="hover:border-b hover:border-b-blue-600 dark:hover:border-b-blue-400 duration-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <Link href="/add-tutors">Add Tutors</Link>
                </li>

                <li
                  className="hover:border-b hover:border-b-blue-600 dark:hover:border-b-blue-400 duration-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <Link href="/my-tutors">My Tutors</Link>
                </li>

                <li
                  className="hover:border-b hover:border-b-blue-600 dark:hover:border-b-blue-400 duration-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <Link href="/booked-sessions">Booked Sessions</Link>
                </li>
              </>
            )
          }
        </ul>

        {
          !user && (
            <div className="flex gap-2 items-center">
              <Link href={"/signin"}>
                <Button 
                  className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
                >
                  Sign In
                </Button>
              </Link>

              <Link href={"/signup"}>
                <Button 
                  className="bg-transparent border border-blue-600  dark:border-blue-500 rounded-md text-blue-600 dark:text-blue-500"
                  variant="secondary"
                  >
                    Sign Up
                  </Button>
              </Link>
            </div>
          )
        }

        {
          user && (
            <div className="flex gap-2 items-center">
              <ProfileDropDown />
            </div>
          )
        }

        <Button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="ghost"
        >
          {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
        </Button>

      </nav>
    </header>
  );
};

export default Navbar;