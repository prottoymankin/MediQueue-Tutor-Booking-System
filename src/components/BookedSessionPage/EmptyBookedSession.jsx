import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import empty from "../../../public/assets/empty-folder.png";

const EmptyBookedSession = () => {
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
          <h2 className="font-bold text-2xl">No Sessions Booked Yet</h2>
          <p className="max-w-sm mx-auto">
            You haven’t booked any tutoring sessions yet. Explore available tutors and schedule your first session.
          </p>
        </div>

        <Link href={"/tutors"}>
          <Button className={"bg-primary hover:bg-blue-500"}>
            Browse Tutors
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EmptyBookedSession;