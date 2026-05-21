import TestimonialCard from "./TestimonialCard";
import person1 from "../../../public/assets/person-1.avif";
import person2 from "../../../public/assets/person-2.avif";
import person3 from "../../../public/assets/person-3.avif";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Higher Secondary Student",
      image: person1,
      review:
        "MediQueue made it very easy to find experienced tutors and schedule classes without any hassle.",
    },
    {
      id: 2,
      name: "Rakib Hasan",
      role: "University Admission Candidate",
      image: person3,
      review:
        "I was able to book sessions based on my preferred time and improve my preparation effectively.",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      role: "SSC Student",
      image: person2,
      review:
        "The platform is organized and easy to use. I really liked managing my learning sessions online.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10">
      <header className="space-y-2 text-center">
        <h2 className="font-bold text-primary text-center text-4xl">
          What Students Say
        </h2>
        <p className="text-muted">Hear from students who improved their learning experience through MediQueue.</p>
      </header>

      <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
        {
          testimonialsData.map(data => (
            <TestimonialCard
              data={data}
              key={data.id} 
            />
          ))
        }
      </div>
    </section>
  );
};

export default Testimonials;