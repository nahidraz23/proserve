import Link from "next/link";
import React from "react";
import { IoMdTimer } from "react-icons/io";
import { RiTimelineView } from "react-icons/ri";
import { IoMdStar } from "react-icons/io";

const ServiceCard = ({ service }) => {
  const { name, description, status, time, price, review } = service;
  return (
    <div>
      <Link
        href="#"
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500">BDT {price} </dd>
            </div>

            <div>
              <dt className="sr-only">Address</dt>

              <dd className="font-medium">{name}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 md:gap-4 xl:gap-8  text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <IoMdTimer color="blue" size={20}></IoMdTimer>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Duration</p>

                <p className="font-medium">{time} Hours</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="size-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Status</p>

                <p className="font-medium">{status}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <RiTimelineView size={20} color="blue"></RiTimelineView>
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Review</p>

                <p className="font-medium flex items-center gap-1">
                  <span>{review}</span> <IoMdStar color="orange"></IoMdStar>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
