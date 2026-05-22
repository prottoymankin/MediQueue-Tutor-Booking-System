import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer 
      className="
      border-t border-slate-200 dark:border-slate-800
      py-15"
    >
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <header>
          <Link 
            className="font-extrabold text-slate-900 dark:text-slate-50 text-[28px]" 
            href={"/"}
          >
            <span className="text-blue-600 dark:text-blue-400">M</span>
            edi
            <span className="text-blue-600 dark:text-blue-400">Q</span>
            ueue
          </Link>

          <p className="max-w-xl text-slate-600 dark:text-slate-400">
            MediQueue simplifies online tutor booking by helping students find expert tutors, schedule learning sessions, and manage classes seamlessly through a smart and organized platform.
          </p>
        </header>

        <div className="gap-6 grid md:grid-cols-3">
          <div className="space-y-4">
            <h3 
              className="font-medium text-slate-800 dark:text-slate-200 text-2xl"
            >
              Services
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>About us</li>
              <li><Link href={"/tutors"}>Tutors</Link></li>
              <li><Link href={"/add-tutors"}>Add Tutors</Link></li>
              <li><Link href={"/booked-sessions"}>Booked Sessions</Link></li>
              <li>Terms and conditions</li>
            </ul>

          </div>

          <div className="space-y-4">
            <h3 
              className="font-medium text-slate-800 dark:text-slate-200 text-2xl"
            >
              Contact
            </h3>

            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li className="flex gap-2 items-center">
                <IoMdMail />
                support@mediqueue.com
              </li>
              <li className="flex gap-2 items-center">
                <IoMdCall />
                01799887766
              </li>
              <li className="flex gap-2 items-center max-w-sm">
                <IoLocationSharp />
                Suite 302, Education Hub Tower, Banani, Dhaka 1213, Bangladesh
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 
              className="font-medium text-slate-800 dark:text-slate-200 text-2xl"
            >
              Social
            </h3>

            <ul className="flex gap-4 items-center text-slate-600 dark:text-slate-400 text-2xl">
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
              <li><FaYoutube /></li>
              <li><FaLinkedin /></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-slate-800 dark:text-slate-200">
          © {new Date().getFullYear()} MediQueue. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;