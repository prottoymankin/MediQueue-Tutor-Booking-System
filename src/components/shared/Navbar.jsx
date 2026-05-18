import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import ProfileDropDown from "../Navbar/ProfileDropDown";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tutors", path: "/tutors" },
    { name: "Add Tutors", path: "/add-tutors" },
    { name: "My Tutors", path: "/my-tutors" },
    { name: "Booked Sessions", path: "/booked-sessions" },
  ];

  return (
    <header className="bg-white sticky shadow-lg top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <Link 
          className="font-bold text-primary text-[28px]" 
          href={"/"}
        >
          <span className="text-blue-500">M</span>
          edi
          <span className="text-blue-500">Q</span>
          ueue
        </Link>

        <ul className="flex font-medium gap-6 items-center text-primary">
          {
            navLinks.map((navLink, idx) => (
              <li
                className="duration-200 hover:border-b hover:border-b-blue-500 hover:text-blue-500 transition"
                key={idx}
              >
                <Link href={navLink.path}>{navLink.name}</Link>
              </li>
            ))
          }
        </ul>

        <div className="flex gap-2 items-center">
          <Link href={"/signin"}>
            <Button 
              className={"bg-primary hover:bg-blue-500 duration-200 rounded-none transition"}
            >
              Sign In
            </Button>
          </Link>

          <Link href={"/signup"}>
            <Button 
              className={"duration hover:bg-transparent border-primary hover:border-blue-500  rounded-none text-primary hover:text-blue-500 transition"} 
              variant="outline"
              >
                Sign Up
              </Button>
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          <ProfileDropDown />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;