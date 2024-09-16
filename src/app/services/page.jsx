"use client"
import ServicePage from "@/components/servicePage/ServicePage";
import React, { useEffect, useState } from "react";
import Loading from "../loading";

const page = () => {
  const [services, setServices] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true)
      try {
        const res = await fetch("http://localhost:3000/services/api/get-all");
        const data = await res.json();
        setLoading(false)
        setServices(data.service);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchServices();
  }, []);

  // console.log(services);

  if(loading){return <div className="h-screen flex justify-center items-center">
    <Loading></Loading>
  </div>}

  return (
    <div>
      <ServicePage services={services}></ServicePage>
    </div>
  );
};

export default page;
