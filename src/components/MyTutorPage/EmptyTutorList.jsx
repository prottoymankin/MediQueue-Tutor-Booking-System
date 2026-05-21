import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import empty from "../../../public/assets/empty-folder.png";

const EmptyTutorList = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-15 w-full">
      <div 
        className="flex flex-col items-center py-10 rounded-2xl shadow-2xl space-y-5"
      >
        <div className="h-50 max-w-50 w-full overflow-hidden relative">
          <Image 
            alt=""
            className="object-contain"
            fill
            src={empty}
          />
        </div>

        <div className="text-center text-muted">
          <h2 className="font-bold text-2xl">No Tutors Found</h2>
          <p className="max-w-sm mx-auto">
            You haven’t added any tutor yet. Add your first tutor to get started.
          </p>
        </div>

        <Link href={"/add-tutors"}>
          <Button className={"bg-primary hover:bg-blue-500"}>
            Add Tutor
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EmptyTutorList;