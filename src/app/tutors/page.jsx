import TutorCard from "@/components/Tutors/TutorCard";

const TutorsPage = async () => {
  const response = await fetch("http://localhost:5000/tutors");
  const tutors = await response.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10 w-full">
      <header className="space-y-1">
        <h2 
          className="font-bold text-slate-900 dark:text-slate-50 text-3xl"
        >
          Explore Our Tutors
        </h2>

        <p className="max-w-lg text-slate-600 dark:text-slate-400">
          Browse experienced tutors by subject, schedule, and teaching style to find the right learning support for your academic journey.
        </p>
      </header>

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

export default TutorsPage;