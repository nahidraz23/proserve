import Review from "@/components/Review";
import Banner from "@/components/HomePage/Banner/Banner";
import HowItWork from "@/components/HomePage/HowItWork";
import HomeStats from "@/components/HomePage/HomeStats";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <HowItWork/>
      <HomeStats/>
      <Review />
    </div>
  );
}
