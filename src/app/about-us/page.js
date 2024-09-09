import Image from "next/image";
import WhoWeAre from '../../assets/about-us/About-us--Who-we-are_2.webp'
import service1 from '../../assets/about-us/home-internet_1.webp'
import { Button } from "@/components/ui/button";

export default function AboutUs() {
    const statsData = [
        { id: 1, stats: "12,000 +", title: "Service Providers" },
        { id: 2, stats: "1,00,000 +", title: "Order Served" },
        { id: 3, stats: "50000 +", title: "5 Star Received" },
    ];

    return (
        <div className="container pt-32 lg:space-y-14 md:space-y-8 space-y-5 pb-10">
            {/* who we are */}
            <div className="flex lg:flex-row flex-col relative lg:gap-0 gap-5">
                <div>
                    <Image className="rounded-md" src={WhoWeAre} alt="who i am logo" width={789} height={500} />
                </div>

                <div className="border md:p-10 p-4 bg-white lg:w-[470px] lg:h-[390px] space-y-3 lg:absolute right-32 top-[30px] rounded-md">
                    <h3 className="text-3xl font-bold text-[#000000ad]">Who We Are</h3>
                    <p className="text-base">We proudly stand as the nation's largest and #1 fiber broadband internet service provider, as recognized by APNIC. Our aim is to ensure high-speed, reliable internet for the whole nation, bridging connectivity gaps even in fiber-inaccessible regions. With our legacy of trust, we empower individuals, businesses, and communities to flourish in today's digital landscape.</p>
                </div>
            </div>

            {/* about stats */}
            <div className="flex flex-col md:flex-row justify-between md:gap-6 gap-0">
                {statsData.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className={`p-6 w-full text-center border bg-[#F4F5F8]`}
                        >
                            <p className="text-[42px] font-normal text-gray-800">{item.stats}</p>
                            <p className="text-[18px] font-medium text-gray-600">{item.title}</p>
                        </div>
                    )
                })}
            </div>

            {/* about proserve */}
            <div className="space-y-3">
                <h4 className="text-3xl font-semibold">About Proserve</h4>
                <p className="text-base"> 
                At Proserve, we are committed to providing reliable and efficient utility services to our clients. With a focus on quality, innovation, and customer satisfaction, we deliver essential services that power homes and businesses. Our team of skilled professionals works around the clock to ensure the seamless delivery of electricity, water, and other vital utilities. We take pride in our transparent approach, competitive pricing, and dedication to sustainability. Whether you're a residential or commercial customer, we strive to meet your unique needs with exceptional service and support. Trust Proserve for dependable utility solutions that keep your world running smoothly. 
                </p>
            </div>

            {/* missoin */}
            <div className="space-y-3">
                <h4 className="text-3xl font-semibold">About Mission</h4>
                <p className="text-base">
                Our mission is to provide high-quality, reliable, and sustainable utility services that meet the evolving needs of our customers. We are dedicated to ensuring uninterrupted service through innovation, operational excellence, and a customer-first approach. By leveraging advanced technology and fostering strong relationships with our clients, we aim to create efficient and eco-friendly solutions that enhance everyday life, while maintaining transparency, affordability, and trust.  
                </p>
            </div>

            {/* vision */}
            <div className="space-y-3">
                <h4 className="text-3xl font-semibold">About Vision</h4>
                <p className="text-base">
                To be the leading provider of sustainable and innovative utility services, empowering communities and businesses to thrive in an ever-evolving world. We envision a future where our solutions drive progress, reduce environmental impact, and enhance the quality of life for all. By embracing technology and fostering a culture of continuous improvement, we aim to set new standards in efficiency, reliability, and customer care.  
                </p>
            </div>

            {/* another info */}
            <div className="flex md:flex-row flex-col items-center md:gap-0 gap-5">
                <div className="space-y-5 md:w-[50%] w-full">
                    <h4 className="text-3xl font-semibold mb-3">ProServe For User</h4>

                    <pv>
                        <p className="text-lg">Experience the finest home internet with Bangladesh's largest and #1 fiber broadband. From streaming to work from home, gaming to video calls, Carnival delivers the fastest and most reliable service.</p>
                    </pv>

                    <div>
                        <ul className="space-y-2 text-lg">
                            <li>* Upto 100 Mbps Unlimited Internet Package</li>
                            <li>* Upto 100 Mbps Unlimited Internet Package</li>
                            <li>* Upto 100 Mbps Unlimited Internet Package</li>
                        </ul>
                    </div>

                    <div>
                        <Button>Explore More</Button>
                    </div>
                </div>

                <div className="md:w-[50%] w-full">
                    <Image className="rounded-md" src={service1} alt="home service images"/>
                </div>
            </div>

        </div>
    )
}