import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="relative py-8 pt-28 ">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Contact Info Section */}
        <div className="py-12 md:py-16 md:px-12 text-center md:text-left ">
          <h1 className="text-4xl font-extrabold ">
            Need Assistance? We are Here to Help!
          </h1>
          <p className="pt-4 pb-6  text-gray-600">
            Reach out to us for any inquiries or service requests. Our team is
            ready to provide the support you need, quickly and efficiently.
          </p>
          <div className="space-y-6">
            {/* Address */}
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-primary mr-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className=" text-gray-700">Mohakhali DOHS, Dhaka</span>
            </p>
            {/* Phone */}
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-primary mr-4"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className=" text-gray-700">+880183456789</span>
            </p>
            {/* Email */}
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-primary mr-4"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span className=" text-gray-700">proserve@business.com</span>
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center justify-center md:justify-start mt-8 space-x-6">
              <span className="text-primary hover:text-white hover:bg-primary p-2 border-2 border-primary  rounded-full transition duration-200 shadow-lg">
                <FaFacebookF size={22} />
              </span>
              <span className="text-primary border-2 border-primary hover:text-white hover:bg-primary p-2 rounded-full transition duration-200 shadow-lg">
                <FaInstagram size={23} />
              </span>
              <span className="text-primary border-2 border-primary hover:text-white hover:bg-primary p-2 rounded-full transition duration-200 shadow-lg">
                <FaTwitter size={22} />
              </span>
              <span className="text-primary border-2 border-primary hover:text-white hover:bg-primary p-2 rounded-full transition duration-200 shadow-lg">
                <FaLinkedinIn size={23} />
              </span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="flex flex-col py-12 space-y-6 md:py-16 md:px-12">
          <label className="block">
            <span className="text-lg text-gray-700">Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="block border-2 w-full mt-3 rounded-lg px-4 py-3 border-gray-300 focus:border-primary focus:ring-primary"
            />
          </label>
          <label className="block">
            <span className="text-lg text-gray-700">Email address</span>
            <input
              type="email"
              placeholder="Enter Your email address"
              className="block border-2 w-full mt-3 rounded-lg px-4 py-3 border-gray-300 focus:border-primary focus:ring-primary"
            />
          </label>
          <label className="block">
            <span className="text-lg text-gray-700">Message</span>
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="block border-2 w-full mt-3 rounded-lg px-4 py-3 border-gray-300 focus:border-primary focus:ring-primary"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-primary text-white py-3 rounded-lg text-lg font-semibold  transition duration-300 hover:shadow-2xl hover:shadow-primary/20 "
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="flex justify-center mt-12 rounded-lg">
        <iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.535219292401!2d90.37421541498174!3d23.750998394585037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77cae5692f5%3A0x4b4f15abbd80e226!2sMohakhali%20DOHS%20Residential%20Area!5e0!3m2!1sen!2sbd!4v1638885738047!5m2!1sen!2sbd"
          className="w-[81%] h-96 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
          title="Map of Mohakhali, Dhaka"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
