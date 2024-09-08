import Banner from "@/components/HomePage/Header/Banner";
import HomeStats from "@/components/HomePage/HomeStats";
import HowItWork from "@/components/HomePage/HowItWork";
import Review from "@/components/Review";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <Recommendedservice></Recommendedservice>
      <HowItWork/>
      <HomeStats/>
      <Review/>
    </div>
  );
}
