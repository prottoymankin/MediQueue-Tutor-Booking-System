import { BookSessionModal } from "@/components/Tutors/BookSessionModal";
import Image from "next/image";

const TutorDatailsPage = async ({ params }) => {
  const { id } = await params;
  
  const response = await fetch(`http://localhost:5000/tutors/${id}`);
  const tutor = await response.json();

  const {  availableDaysTimes, experience, hourlyFee, _id, institution, location, photo, sessionStartDate, subject, teachingMode, totalSlot, tutorName} = tutor;

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10 w-full">
      <div 
        className="border border-primary flex gap-6 items-center p-6 rounded-2xl"
      >
        <div 
          className="min-h-[55vh] overflow-hidden relative rounded-2xl w-1/2"
        >
          <Image 
            alt={tutorName}
            src={photo}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4 w-1/2">
          <div>
            <h3 className="font-bold text-primary text-2xl">{tutorName}</h3>
            <p className="text-muted">{subject}</p>
          </div>

          <div className="space-y-2 text-lg">
            <p>
              <span className="font-semibold">Institution:</span> {institution}
            </p>

            <p>
              <span className="font-semibold">Experiences:</span> {experience}
            </p>

            <p>
              <span className="font-semibold">Teaching Mode:</span> {teachingMode === "Both" ? "Both(Online & Offline)" : teachingMode}
            </p>

            <p>
              <span className="font-semibold">Available Days & Time Slot:</span> {availableDaysTimes}
            </p>

            <p>
              <span className="font-semibold">Session Start Date:</span> {
                new Date(sessionStartDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })
              }
            </p>

            <p>
              <span className="font-semibold">Locatioin:</span> {location}
            </p>

            <p>
              <span className="font-semibold">Remaining Slots:</span> {totalSlot}
            </p>

            <p>
              <span className="font-semibold">Fee:</span> TK{hourlyFee}/hour
            </p>
          </div>

          <div className="flex justify-end">
            <BookSessionModal
              tutorId={_id}
              tutorName={tutorName}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDatailsPage;