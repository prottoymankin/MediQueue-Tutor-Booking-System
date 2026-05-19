import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }) => {
  const { _id, experience, hourlyFee, photo, subject, tutorName,  } = tutor;

  return (
    <div 
      className="border border-primary duration-200 overflow-hidden rounded-2xl shadow-md hover:shadow-[8px_8px_0_#023760] transition hover:-translate-y-1"
    >
      <div className="h-60 relative w-full">
        <Image 
          alt={tutorName}
          src={photo}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 space-y-2">
        <div>
          <h3 className="font-bold text-primary text-xl">
            {tutorName}
          </h3>
          <p className="text-muted text-sm">{subject}</p>
        </div>

        <div className="space-y-1">
          <p>Experience: {experience}</p>
          <p>Fee: {hourlyFee}/hr</p>
        </div>

        <Link href={`/tutors/${_id}`}>
          <Button 
            className={"bg-primary hover:bg-blue-500 duration-200 rounded-sm transition"}
          >
            Book Session
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;