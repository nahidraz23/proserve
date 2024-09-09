import banner2 from "../../../assets/images/banner2.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div >
      <div>
        <Image
          src={banner2}
          alt="Banner image"
          className="md:h-[800px] w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
