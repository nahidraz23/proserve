'use client'
import DashboardLayout from "@/app/dashboard/layout";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const path = usePathname();

  if(path.includes('dashboard')){
    return DashboardLayout;
  }

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-10 text-center md:text-left w-[80%]">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-yellow-400">ProServe</h1>
          <p className="text-gray-300 text-sm md:w-5/6 leading-relaxed">
            Experience professional and reliable services tailored to your
            needs, with a focus on convenience, quality, and customer
            satisfaction.
          </p>
          <div className="flex items-center justify-center md:justify-start mt-4 space-x-6">
            <span className="text-yellow-400 hover:text-white hover:bg-yellow-400 p-2 border-2 border-yellow-400 rounded-full transition duration-200 shadow-lg">
              <FaFacebookF size={22} />
            </span>
            <span className="text-yellow-400 border-2 border-yellow-400 hover:text-white hover:bg-yellow-400 p-2 rounded-full transition duration-200 shadow-lg">
              <FaInstagram size={23} />
            </span>
            <span className="text-yellow-400 border-2 border-yellow-400 hover:text-white hover:bg-yellow-400 p-2 rounded-full transition duration-200 shadow-lg">
              <FaTwitter size={22} />
            </span>
            <span className="text-yellow-400 border-2 border-yellow-400 hover:text-white hover:bg-yellow-400 p-2 rounded-full transition duration-200 shadow-lg">
              <FaLinkedinIn size={23} />
            </span>
          </div>
        </div>

        {/* Service Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">
            Services
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              Home Cleaning
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              Ambulance
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              Laptop Servicing
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              More
            </li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">
            More Services
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              AC Repair
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              Plumbing
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              Home Security
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              Others
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">
            Contact Us
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              Email: support@proserve.com
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              Phone: +880-123-456789
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">
              Address: 123 Service Street, Dhaka
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-300">
        <p>© {new Date().getFullYear()} ProServe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
