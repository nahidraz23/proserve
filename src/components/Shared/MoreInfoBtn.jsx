import Image from 'next/image';
import React from 'react';
import RightArrow from '../../assets/RightArrow.svg';

const MoreInfoBtn = () => {
    return (
        <div>
            <button className='flex gap-1'>
                <p className='text-primary'>More Info</p>
                <Image src={RightArrow} alt='right arrow'></Image>
            </button>
        </div>
    );
};

export default MoreInfoBtn;