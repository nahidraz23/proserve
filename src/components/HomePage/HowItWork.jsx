import Image from "next/image";
import img from "/src/assets/home/howITWork/sheba-howitwork.webp";
const HowItWork = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <p className="uppercase text-sm font-medium text-center md:text-left mb-4">
        ------ How it works
      </p>
      <h3 className="text-2xl md:text-4xl font-semibold text-center md:text-left mb-8">
        Easiest way to get a service
      </h3>

      <div className="flex flex-col md:flex-row md:gap-14 gap-3 items-center md:items-start">
        {/* left side - Image or placeholder */}
        <div className="md:h-[360px] h-auto w-full md:w-1/2">
          <Image
            className="h-full w-full object-cover"
            src={img}
            alt="images"
          />
        </div>

        {/* timeline right side */}
        <div className="lg:space-y-[68px] md:space-y-[48px] space-y-8 w-full md:w-1/2 flex flex-col relative">
          {/* content 1 */}
          <div className="flex items-start gap-5">
            <div className="bg-primary rounded-full">
              <p className="h-16 w-16 text-xl font-semibold flex items-center justify-center text-white">
                1
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Select the Service</h5>
              <p className="text-gray-600">
                Pick the service you are looking for - from the website or the
                app.
              </p>
            </div>
          </div>

          {/* content 2 */}
          <div className="flex items-start gap-5">
            <div className="bg-primary rounded-full">
              <p className="h-16 w-16 text-xl font-semibold flex items-center justify-center text-white">
                1
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Select the Service</h5>
              <p className="text-gray-600">
                Pick the service you are looking for - from the website or the
                app.
              </p>
            </div>
          </div>

          {/* content 3 */}
          <div className="flex items-start gap-5">
            <div className="bg-primary rounded-full">
              <p className="h-16 w-16 text-xl font-semibold flex items-center justify-center text-white">
                1
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Select the Service</h5>
              <p className="text-gray-600">
                Pick the service you are looking for - from the website or the
                app.
              </p>
            </div>
          </div>

          {/* hr line */}
          <p className="h-[2px] bg-slate-800/40 absolute top-28 rotate-90 lg:w-64 md:w-80 w-48 lg:-left-[96px] md:-left-[128px] -left-16 -z-10"></p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
