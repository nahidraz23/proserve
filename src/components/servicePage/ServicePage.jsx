"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import ServiceCard from "../serviceCard/ServiceCard";

const ServicePage = ({services}) => {

  // Extract unique categories
  const uniqueCategories = [...new Set(services.map((ser) => ser.category))];

  // Categorize services
  const categorizedServices = {};
  uniqueCategories.forEach((category) => {
    categorizedServices[category] = services.filter(
      (ser) => ser.category === category
    );
  });

  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("");

  // Refs for each category section
  const categoryRefs = useRef({});

  // Setting the observer to track the visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Change the threshold to adjust sensitivity
    );

    uniqueCategories.forEach((category) => {
      if (categoryRefs.current[category]) {
        observer.observe(categoryRefs.current[category]);
      }
    });

    return () => {
      uniqueCategories.forEach((category) => {
        if (categoryRefs.current[category]) {
          observer.unobserve(categoryRefs.current[category]);
        }
      });
    };
  }, [uniqueCategories]);

  return (
    <div className="container mx-auto flex gap-8">
      {/* Sidebar for category navigation */}
      <div className="w-1/6 min-h-screen py-8 border-r-2 mt-[80px] ">
        <div className="sticky top-24 w-full">
          <h1 className="text-2xl font-bold my-4 pl-4">All Services</h1>
          <div className="flex flex-col">
            {/* Category links */}
            {uniqueCategories.map((category, index) => (
              <Link
                className={`py-2 px-4 ${
                  activeCategory === category
                    ? "bg-[#F4F5F8] border-r-4 border-primary"
                    : ""
                }`}
                key={index}
                href={`#${category}`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area to show categorized services */}
      <div className="w-5/6 min-h-screen pb-10 pt-[40px]">
        {uniqueCategories.map((category) => (
          <div
            key={category}
            id={category}
            ref={(el) => (categoryRefs.current[category] = el)}
            className="pt-24"
          >
            {/* Category title */}
            <h2 className="text-3xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Show service cards under each category */}
              {categorizedServices[category].map((ser) => (
                <ServiceCard key={ser.name} service={ser} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
