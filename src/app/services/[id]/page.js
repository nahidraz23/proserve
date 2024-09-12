"use client"
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
            <div className="relative w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://bidaquickserv.org/uploads/logo/Sonali-Pay.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <div className="text-center">
                        <div className="flex flex-col items-center">
                        <h1 className="md:text-5xl text-4xl font-bold">{name}</h1>
                        <div className="mt-2">
                            <Image src={'https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/png/badge.png'} width={150} height={160}></Image>
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
                {/* get button */}
            <div className="absolute top-8 md:right-10 right-2 text-white">
                <Link href={`/checkout/${category}`}>
                    <Button>Get Service</Button>
                </Link>
            </div>

                <div className="flex flex-col md:flex-row">
                    

                    {/* Main Content */}
                    <div className="w-full md:w-3/4 p-4">
                        <h2 className="md:text-2xl text-xl font-bold mb-4">Service Overview</h2>
                        <div className="text-gray-700 space-y-4">
                            <p className="font-semibold">Know your service</p>
                            <ul className="list-disc list-inside">
                                <li>Don’t Overload the Brush: Avoid picking up too much acrylic powder or liquid...</li>
                                <li>Don’t Skip the Dehydrator: Using a nail dehydrator can help remove excess moisture...</li>
                                <li>Don’t Rush the Process: Allow adequate time for each step, including drying times...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverview;
