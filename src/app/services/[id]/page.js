"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ServiceOverview = ({ params }) => {
    const [service, setService] = useState([]);
    console.log(service);
    const {name,price,review,category} = service;

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await fetch(`http://localhost:3000/services/api/${params.id}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch service");
                }
                const data = await res.json();
                setService(data);
            } catch (error) {
                console.error("Failed to fetch service:", error);
            }
        };

        fetchService();
    }, [params.id]);

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full pt-20">
            {/* Header Section */}
            <div className="relative w-full h-64 bg-cover object-cover bg-center"
                style={{ backgroundImage: 'url(https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/Banner.png)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <div className="text-center">
                        <div className="flex flex-col items-center">
                            <h1 className="md:text-5xl text-4xl font-bold">{name}</h1>
                            <div className="mt-2">
                                <Image src={'https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/png/badge.png'} width={150} height={160} />
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-2 space-x-2">
                            <span className="px-4 py-3 text-base font-semibold bg-secondary rounded-md"><span>{review}</span> out of 5</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto py-4 px-[2px] md:p-8 relative">
                {/* Get Service Button */}
                <div className="absolute top-8 md:right-10 right-2 text-white">
                    <Link href={`/checkout/${category}`}>
                        <button className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-primary rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
                                <span className="relative">Get Service</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* Main Content */}
                    <div className="w-full md:w-3/4 p-4">
                        <h2 className="md:text-2xl text-xl font-bold mb-4">Service Overview</h2>
                        <div className="text-gray-700 space-y-4">
                            <p className="font-semibold">Know your service</p>
                            <ul className="list-disc list-inside space-y-2 pl-5 text-gray-600">
                                <li>Don’t Overload the Brush: Avoid picking up too much acrylic powder or liquid for application.</li>
                                <li>Don’t Skip the Dehydrator: Using a nail dehydrator helps remove excess moisture from nails.</li>
                                <li>Don’t Rush the Process: Allow adequate time for each step, including drying times for a smooth finish.</li>
                                <li>Regular Filter Cleaning: Ensure AC filters are cleaned every three months to maintain air quality and system efficiency.</li>
                                <li>Check Thermostat Settings: Make sure the thermostat is set correctly for optimal cooling and energy savings.</li>
                                <li>Inspect Ductwork: Ensure there are no leaks in the ductwork to avoid losing cool air and wasting energy.</li>
                                <li>AC Coil Maintenance: Clean the AC coils annually to prevent buildup that can decrease efficiency.</li>
                                <li>Ensure Proper Refrigerant Levels: Insufficient refrigerant can lead to poor cooling performance. Have it checked regularly.</li>
                                <li>Schedule Professional Servicing: Book an annual AC inspection by a certified technician to keep the system running smoothly.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverview;
