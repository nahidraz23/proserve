"use client";
import MoreInfoBtn from '@/components/Shared/MoreInfoBtn';
import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 gap-7 md:grid-cols-4 mt-8 md:mt-32'>
            <div>
                <h1 className='text-5xl font-bold'>
                    Why <br /> Choosing Us
                </h1>
            </div>
            <div className='space-y-4'>
                <h1 className='text-2xl font-semibold'>Luxury facilities</h1>
                <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
               <MoreInfoBtn></MoreInfoBtn>
            </div>
            <div className='space-y-4'>
                <h1 className='text-2xl font-semibold'>Affordable Price</h1>
                <p>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                <MoreInfoBtn></MoreInfoBtn>
            </div>
            <div className='space-y-4'>
                <h1 className='text-2xl font-semibold'>Many Choices</h1>
                <p>We provide many unique work space choices so that you can choose the workspace based to your liking.</p>
                <MoreInfoBtn></MoreInfoBtn>
            </div>
        </div>
    );
};

export default WhyChooseUs;