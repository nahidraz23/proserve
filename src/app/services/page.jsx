import ServicePage from "@/components/servicePage/ServicePage";
import React from "react";

const page = () => {
  const services = [
    {
      name: "AC Servicing",
      description:
        "Comprehensive air conditioning servicing including cleaning, gas refilling, and general maintenance.",
      category: "Home Services",
      price: 2000,
      time: 3,
      review: 4,
      status: "done",
    },
    {
      name: "Home Cleaning",
      description:
        "Deep cleaning of your entire home including bathrooms, kitchen, and living spaces.",
      category: "Home Services",
      price: 1500,
      time: 4,
      review: 5,
      status: "done",
    },
    {
      name: "Nursing",
      description:
        "Professional nursing services for at-home care, including monitoring, medication administration, and more.",
      category: "Healthcare",
      price: 3000,
      time: 8,
      review: 5,
      status: "done",
    },
    {
      name: "Babysitter",
      description:
        "Reliable babysitting services for children of all ages, ensuring their safety and entertainment.",
      category: "Childcare",
      price: 1000,
      time: 4,
      review: 4,
      status: "done",
    },
    {
      name: "TV Service",
      description:
        "Expert TV repair and installation services, including mounting and setup.",
      category: "Electronics",
      price: 1200,
      time: 2,
      review: 4,
      status: "done",
    },
    {
      name: "Laptop Service",
      description:
        "Laptop repair services including hardware troubleshooting, software installation, and virus removal.",
      category: "Electronics",
      price: 1500,
      time: 3,
      review: 5,
      status: "done",
    },
    {
      name: "Salon Care",
      description:
        "At-home salon services including haircuts, styling, and beauty treatments.",
      category: "Beauty & Wellness",
      price: 800,
      time: 2,
      review: 4,
      status: "done",
    },
    {
      name: "Pest Control",
      description:
        "Effective pest control services to eliminate insects, rodents, and other pests from your home.",
      category: "Home Services",
      price: 2500,
      time: 3,
      review: 5,
      status: "done",
    },
    {
      name: "Car Wash",
      description:
        "Professional car washing services including exterior wash and interior cleaning.",
      category: "Automobile",
      price: 700,
      time: 1,
      review: 4,
      status: "done",
    },
    {
      name: "Painting Service",
      description:
        "Professional painting services for both interior and exterior home walls.",
      category: "Home Services",
      price: 5000,
      time: 8,
      review: 5,
      status: "done",
    },
    {
      name: "Ambulance Service",
      description:
        "Emergency ambulance services available 24/7, ensuring timely and safe transportation to hospitals.",
      category: "Healthcare",
      price: 2000,
      time: 1,
      review: 5,
      status: "done",
    },
  ];

  return (
    <div>
      <ServicePage services={services}></ServicePage>
    </div>
  );
};

export default page;
