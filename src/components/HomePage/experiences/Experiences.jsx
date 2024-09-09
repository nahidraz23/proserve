import Image from "next/image";
import expImage from "../../../assets/images/img.png";
import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Experiences = () => {
  return (
    <section className="container mx-auto mt-28 mb-48 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-0">
        <div className="lg:w-1/2">
          <div className="w-[300px] h-[300px] bg-[#F7F7F7] rounded-r-3xl overflow-hidden z-0 -mb-64"></div>
          <div className="z-50 ">
            <Image
              className="rounded-r-3xl"
              src={expImage}
              width={500}
              alt="Picture for experiences section"
            />
          </div>
          <div className="w-[560px] h-[260px] bg-[#F7F7F7] rounded-r-3xl overflow-hidden -mt-[315px] z-0"></div>
        </div>

        <div className="lg:w-1/2 lg:py-7 lg:pr-20 space-y-3 text-center lg:text-start">
          <h5 className="text-xl font-medium uppercase text-[#E8932F]">experiences</h5>
          <h2 className="text-5xl font-bold ">
            We Provide You The <br className="hidden lg:block"/>
            Best Experience
          </h2>
          <p className="text-xl">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>

          <Link className="flex gap-2 text-[#E8932F] justify-center lg:justify-start" href={"#"}>
            <p className="text-xl">More Info</p> <HiOutlineArrowNarrowRight size={30}/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
