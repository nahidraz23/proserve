import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
const ContactPage = () => {
  return (
    <section className="py-8 bg-gray-50 pt-28">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x bg-white rounded-lg shadow-lg">
        <div className="py-12 md:py-16 md:px-12 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Get in touch
          </h1>
          <p className="pt-4 pb-6 text-lg text-gray-600">
            Fill in the form to start a conversation
          </p>
          <div className="space-y-6">
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
              <span className="text-lg text-gray-700">
                Mohakhali DOHS, Dhaka
              </span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-primary mr-4"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className="text-lg text-gray-700">+880183456789</span>
            </p>
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
              <span className="text-lg text-gray-700">
                proserve@business.com
              </span>
            </p>
            <div className="flex items-center justify-center md:justify-start mt-8 space-x-6">
              <span className="text-primary hover:text-white hover:bg-primary p-2 border-2 border-primary  rounded-full transition duration-200">
                <FaFacebookF size={22} />
              </span>
              <span className="text-primary border-2 border-primary hover:text-white hover:bg-primary p-2 rounded-full transition duration-200">
                <FaInstagram size={23} />
              </span>
              <span className="text-primary border-2 border-primary hover:text-white hover:bg-primary p-2 rounded-full transition duration-200">
                <FaTwitter size={22} />
              </span>
              <span className="text-primary border-2 border-primary hover:text-white hover:bg-primary p-2 rounded-full transition duration-200">
                <FaLinkedinIn size={23} />
              </span>
            </div>
          </div>
        </div>
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
            className="bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary/85 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
