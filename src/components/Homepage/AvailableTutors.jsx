import Link from "next/link";
import TutorCard from "../Tutors/TutorCard";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";

const AvailableTutors = async () => {
  const response = await fetch("http://localhost:5000/tutors?limit=6");
  const tutors = await response.json();

  return (
    <section className="max-w-7xl mx-auto space-y-10 w-full">
      <div className="flex items-center justify-between">
        <h2 
          className="font-bold text-center text-slate-900 dark:text-slate-50 text-3xl"
        >
          Available Tutors
        </h2>

        <Link href={"/tutors"}>
          <Button 
            className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
          >
            View All
            <FaArrowRight />
          </Button>
        </Link>
      </div>
      
      <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
        {
          tutors.map(tutor => (
            <TutorCard 
              key={tutor._id}
              tutor={tutor} 
            />  
          ))
        }
      </div>
    </section>
  );
};

export default AvailableTutors;