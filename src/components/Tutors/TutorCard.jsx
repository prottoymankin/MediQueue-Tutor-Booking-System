import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }) => {
  const { _id, experience, hourlyFee, photo, subject, tutorName,  } = tutor;

  return (
    <div 
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 duration-300 overflow-hidden rounded-2xl shadow-sm text-slate-600 dark:text-slate-400 hover:-translate-y-2 transition"
    >
      <div className="h-60 relative w-full">
        <Image 
          alt={tutorName}
          src={photo}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div>
          <h3 
            className="font-bold text-slate-800 dark:text-slate-200 text-xl"
          >
            {tutorName}
          </h3>
          <p className="text-muted text-sm">{subject}</p>
        </div>

        <div className="mb-4 mt-2 space-y-1">
          <p className="space-x-2">
            <span 
              className="font-semibold text-slate-800 dark:text-slate-200"
            >
              Experiences:
            </span>
            
            <span className="text-slate-600 dark:text-slate-300">
              {experience}
            </span>
          </p>

          <p className="space-x-2">
            <span 
              className="font-semibold text-slate-800 dark:text-slate-200"
            >
              Fee:
            </span> 
            
            <span className="text-slate-600 dark:text-slate-300">
              TK{hourlyFee}/hour
            </span>
          </p>
        </div>

        <Link href={`/tutors/${_id}`}>
          <Button 
            className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
          >
            Book Session
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;