import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import PopularCoursesSecton from "../../components/PopularCoursesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCoursesSecton />
    </>
  );
}
