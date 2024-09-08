import Review from "@/components/Review";
import Banner from "@/components/HomePage/Banner/Banner";
import Experiences from "@/components/HomePage/experiences/Experiences";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Experiences />
      <Review />
    </div>
  );
}
