export const dynamic = 'force-dynamic';

import Experiences from '@/components/HomePage/experiences/Experiences'
import Banner from '@/components/HomePage/Header/Banner'
import HomeStats from '@/components/HomePage/HomeStats'
import HowItWork from '@/components/HomePage/HowItWork'
import Recommendedservice from '@/components/HomePage/RecommendedServiceSection/Recommendedservice'
import WhyChooseUs from '@/components/HomePage/WhyChooseSection/WhyChooseUs'
import Review from '@/components/Review'

export default function Home () {
  return (
    <div className=''>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <Recommendedservice></Recommendedservice>
      <Experiences />
      <HowItWork />
      <HomeStats />
      <Review />
    </div>
  )
}
