import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[url('/footer.svg')] bg-center bg-cover bg-no-repeat  py-15 text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <header>
          <Link 
            className="font-bold text-[28px]" 
            href={"/"}
          >
            <span className="text-blue-500">M</span>
            edi
            <span className="text-blue-500">Q</span>
            ueue
          </Link>

          <p className="max-w-xl">
            MediQueue simplifies online tutor booking by helping students find expert tutors, schedule learning sessions, and manage classes seamlessly through a smart and organized platform.
          </p>
        </header>

        <div className="gap-6 grid md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-medium text-2xl">Services</h3>
            <ul className="space-y-2">
              <li>About us</li>
              <li><Link href={"/tutors"}>Tutors</Link></li>
              <li><Link href={"/add-tutors"}>Add Tutors</Link></li>
              <li><Link href={"/booked-sessions"}>Booked Sessions</Link></li>
              <li>Terms and conditions</li>
            </ul>

          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-2xl">Contact</h3>
            <ul className="space-y-2">
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
            <h3 className="font-medium text-2xl">Social</h3>
            <ul className="flex gap-4 items-center text-2xl">
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
              <li><FaYoutube /></li>
              <li><FaLinkedin /></li>
            </ul>
          </div>
        </div>

        <p className="text-center">
          © {new Date().getFullYear()} MediQueue. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;