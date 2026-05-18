import Image from "next/image";
import question from "../../../public/assets/question.png";
import WhyChooseCard from "./WhyChooseCard";
import { LiaCalendarSolid, LiaUserCheckSolid } from "react-icons/lia";
import { MdOutlineAccessTime, MdOutlineLaptopChromebook } from "react-icons/md";

const WhyChoose = () => {
   const whyChooseData = [
    {
      id: 1,
      title: "Verified Tutors",
      description: "Tutors are carefully verified to ensure quality education and a safe learning experience. You can confidently choose skilled tutors for better academic support.",
      icon: <LiaUserCheckSolid />
    },
    {
      id: 2,
      title: "Easy Scheduling",
      description: "Easily book sessions based on your preferred time. The system helps you manage your schedule smoothly without confusion.",
      icon: <LiaCalendarSolid />
    },
    {
      id: 3,
      title: "No Time Conflicts",
      description: "Smart booking prevents time conflicts and ensures an organized, hassle-free learning schedule for every session.",
      icon: <MdOutlineAccessTime />
    }, 
    {
      id: 4,
      title: "Online Learning",
      description: "Join live online sessions from anywhere and learn comfortably with expert tutors using secure video conferencing tools.",
      icon: <MdOutlineLaptopChromebook />
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10">
      <h2 className="font-bold text-primary text-center text-4xl">
        Why Choose Us
      </h2>

      <div className="gap-6 grid grid-cols-3">
        <div className="flex flex-col gap-6 justify-center">
          {
            whyChooseData.slice(0,2).map(data => (
              <WhyChooseCard key={data.id} data={data} />
            ))
          }
        </div>

        <div className="aspect-square relative w-full">
          <Image
            alt=""
            src={question}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 justify-center">
          {
            whyChooseData.slice(2).map(data => (
              <WhyChooseCard key={data.id} data={data} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;