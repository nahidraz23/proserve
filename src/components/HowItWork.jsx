const HowItWork = () => {
  return (
    <div className="container w-full mx-auto">
      <p className="uppercase text-[14px] font-medium">------ How it works</p>
      <h3 className="md:text-[32px] text-[26px] font-semibold">Easiest way to get a service</h3>

      <div className="flex md:flex-row flex-col gap-10">
        {/* left side */}
        <div className="h-[207px] md:w-1/2 w-full bg-slate-500"></div>

        {/* timeline right side */}
        <div className="space-y-5 md:w-1/2 w-full">
          {/* content 1 */}
          <div className="flex gap-3">
            <div className="h-16 w-16 bg-green-300 rounded-full flex justify-center items-center">
              <p>1</p>
            </div>
            <div className="space-y-3">
              <h5>Select the Service</h5>
              <p>
                Pick the service you are looking for- from the website or the
                app.
              </p>
            </div>
          </div>

          {/* content 2 */}
          <div className="flex gap-3">
            <div className="h-16 w-16 bg-green-300 rounded-full flex justify-center items-center">
              <p>1</p>
            </div>
            <div className="space-y-3">
              <h5>Select the Service</h5>
              <p>
                Pick the service you are looking for- from the website or the
                app.
              </p>
            </div>
          </div>

          {/* content 2 */}
          <div className="flex gap-3">
            <div className="h-16 w-16 bg-green-300 rounded-full flex justify-center items-center">
              <p>1</p>
            </div>
            <div className="space-y-3">
              <h5>Select the Service</h5>
              <p>
                Pick the service you are looking for- from the website or the
                app.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWork;
