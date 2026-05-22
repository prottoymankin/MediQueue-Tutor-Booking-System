import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "MediQueue – Tutor Booking System",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} h-full antialiased`}
    >
      <body 
        className="bg-slate-50 dark:bg-slate-950 min-h-full flex flex-col"
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
