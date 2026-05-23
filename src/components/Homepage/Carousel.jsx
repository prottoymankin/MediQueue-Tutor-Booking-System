"use client";

import { Button } from "@heroui/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image"
import cimg1 from "../../../public/assets/cimg1.jpg";
import cimg2 from "../../../public/assets/cimg2.jpg";
import cimg3 from "../../../public/assets/cimg3.jpeg";
import Link from "next/link";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Learn From Expert Tutors",
      description:
        "Connect with skilled tutors and improve your learning experience with personalized guidance.",
      buttonText: "Explore Tutors",
      image: cimg1,
      path: "/tutors"
    },
    {
      id: 2,
      title: "Book Learning Sessions Easily",
      description:
        "Schedule tutoring sessions anytime and learn at your own pace with flexible timing.",
      buttonText: "Find a Tutor",
      image: cimg2,
      path: "/tutors"
    },
    {
      id: 3,
      title: "Grow Your Skills With Confidence",
      description:
        "Practice, learn, and achieve your academic goals through interactive tutoring support.",
      buttonText: "Start Learning",
      image: cimg3,
      path: "/tutors"
    }
  ]

  const handleRightButton = () => {
    setCurrentSlide(prev => {
      if (prev === slides.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  }

  const handleLeftButton = () => {
    setCurrentSlide(prev => {
      if (prev === 0) {
        return (slides.length - 1);
      }

      return prev - 1;
    });
  }


  return (
    <section 
      className="border flex flex-col items-center justify-center max-w-7xl h-[70vh] mx-auto overflow-hidden p-4 relative rounded-2xl w-full"
    >
       <Image
        alt=""
        className="w-full h-full object-cover absolute"
        src={slides[currentSlide].image}
      />

      <div
        className="absolute bg-black/50 dark:bg-black/50 h-full w-full"
      >

      </div>

      <Button 
        isIconOnly
        onClick={handleRightButton}
        className={"absolute bg-white/70 hover:bg-white dark:bg-slate-800/60 dark:hover:bg-slate-700 bottom-10 md:bottom-1/2 right-10 shadow-md dark:shadow-lg text-slate-800 dark:text-white z-50"}
      >
        <FaArrowRight />
      </Button>

      <Button 
        isIconOnly
        className={"absolute bg-white/70 hover:bg-white dark:bg-slate-800/60 dark:hover:bg-slate-700 bottom-10 md:bottom-1/2 left-10 shadow-md dark:shadow-lg text-slate-800 dark:text-white z-50"}
        onClick={handleLeftButton}
      >
        <FaArrowLeft />
      </Button>

      <div className="space-y-5 relative text-center">
        <h1 
          className="font-bold text-slate-100 dark:text-slate-50 text-3xl md:text-4xl"
        >
          {slides[currentSlide].title}
        </h1>

        <p 
          className="max-w-sm mx-auto text-slate-200/80 dark:text-slate-300 text-sm md:text-lg"
        >
          {slides[currentSlide].description}
        </p>

        <div className="flex justify-center">
          <Link href={slides[currentSlide].path}>
            <Button
              className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
            >
              {slides[currentSlide].buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Carousel;