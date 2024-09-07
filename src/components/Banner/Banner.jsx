import React from 'react';
import banner2 from '../../assets/images/banner2.jpg'
import Image from 'next/image';

const Banner = () => {
    return (
        <div> 
            <div className=''>
                <Image src={banner2} alt='Banner image' className='h-[1000px]'/>
            </div>
        </div>
    );
};

export default Banner;