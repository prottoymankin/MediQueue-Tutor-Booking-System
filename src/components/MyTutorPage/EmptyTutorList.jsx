import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import empty from "../../../public/assets/empty-folder.png";

const EmptyTutorList = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-15 w-full">
      <div 
        className="border border-slate-200 dark:border-slate-800 flex flex-col items-center py-10 rounded-2xl space-y-5"
      >
        <div className="h-50 max-w-50 w-full overflow-hidden relative">
          <Image 
            alt=""
            className="object-contain"
            fill
            src={empty}
          />
        </div>

        <div className="text-center">
          <h2 
            className="font-bold text-slate-800 dark:text-slate-200 text-2xl"
          >
            No Tutors Found
          </h2>

          <p 
            className="max-w-sm mx-auto text-slate-600 dark:text-slate-400"
          >
            You haven’t added any tutor yet. Add your first tutor to get started.
          </p>
        </div>

        <Link href={"/add-tutors"}>
          <Button 
            className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
          >
            Add Tutor
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EmptyTutorList;