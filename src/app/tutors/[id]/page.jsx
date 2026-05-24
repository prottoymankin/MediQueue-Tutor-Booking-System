import { BookSessionModal } from "@/components/Tutors/BookSessionModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const TutorDatailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers()
  });
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const tutor = await response.json();

  const {  availableDaysTimes, experience, hourlyFee, _id, institution, location, photo, sessionStartDate, subject, teachingMode, totalSlot, tutorName } = tutor;

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10 w-full">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-6 items-center p-6 rounded-2xl shadow-sm"
      >
        <div 
          className="min-h-[55vh] overflow-hidden relative rounded-2xl w-full max-w-125 lg:w-1/2"
        >
          <Image 
            alt={tutorName}
            src={photo}
            fill
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-4 w-full lg:w-1/2">
          <div>
            <h3 className="font-bold text-blue-600 dark:text-blue-400 text-2xl">{tutorName}</h3>
            <p className="text-muted">{subject}</p>
          </div>

          <div className="space-y-2 text-slate-600 dark:text-slate-400 text-lg">
            <p className="space-x-2">
              <span 
                className="font-semibold text-slate-800 dark:text-slate-200"
              >
                Institution:
              </span>

              <span className="text-slate-600 dark:text-slate-300">
                {institution}
              </span>
            </p>

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
                Teaching Mode:
              </span> 

              <span className="text-slate-600 dark:text-slate-300">
                {teachingMode === "Both" ? "Both(Online & Offline)" : teachingMode}
              </span>
            </p>

            <p className="space-x-2">
              <span 
                className="font-semibold text-slate-800 dark:text-slate-200"
              >
                Available Days & Time Slot:
              </span> 
              
              <span className="text-slate-600 dark:text-slate-300">
                {availableDaysTimes}
              </span>
            </p>

            <p className="space-x-2">
              <span 
                className="font-semibold text-slate-800 dark:text-slate-200"
              >
                Session Start Date:
              </span>
              
              <span className="text-slate-600 dark:text-slate-300">
                {
                  new Date(sessionStartDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })
                }
              </span> 
            </p>

            <p className="space-x-2">
              <span 
                className="font-semibold text-slate-800 dark:text-slate-200"
              >
                Locatioin:
              </span> 
              
              <span className="text-slate-600 dark:text-slate-300">
                {location}
              </span>
            </p>

            <p className="space-x-2">
              <span 
                className="font-semibold text-slate-800 dark:text-slate-200"
              >
                Remaining Slots:
              </span>
              
              <span className="text-slate-600 dark:text-slate-300">
                {totalSlot}
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

          <div className="flex justify-end">
            <BookSessionModal
              tutorId={_id}
              tutorName={tutorName}
              totalSlot={totalSlot}
              sessionStartDate={sessionStartDate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDatailsPage;