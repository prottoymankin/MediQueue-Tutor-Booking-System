import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import notfound from "../../public/assets/notfound.svg";

const NotFoundPage = () => {
  return (
    <section className="min-h-[50vh] py-15 text-center">
      <Image 
        alt=""
        src={notfound}
        width={400}
        className="mx-auto"
      />

      <div className="text-slate-900 dark:text-slate-50">
        <h2 className="font-extrabold text-6xl">404</h2>
        <h3 className="font-bold text-3xl">Page not found</h3>
      </div>

      <p className="my-4 text-lg text-slate-600 dark:text-slate-400">
        Oops! The page you are trying to access could not be found.
      </p>

      <Link href={"/"}>
        <Button 
          className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
        >
          Back to home
        </Button>
      </Link>
    </section>
  );
};

export default NotFoundPage;