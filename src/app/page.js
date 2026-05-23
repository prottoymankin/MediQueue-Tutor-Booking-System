import AvailableTutors from "@/components/Homepage/AvailableTutors";
import Carousel from "@/components/Homepage/Carousel";
import Testimonials from "@/components/Homepage/Testimonials";
import WhyChoose from "@/components/Homepage/WhyChoose";

export default function Home() {
  return (
    <div className="px-4 py-15 space-y-25">
      <Carousel />
      <AvailableTutors />
      <WhyChoose />
      <Testimonials />
    </div>
  );
}
