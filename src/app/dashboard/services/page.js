"use client"
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

const ServicesPage = () => {
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  const [loading,setLoading] = useState(false)
  console.table("dash ser",services);

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

  const handleDelete = (id) => {
    console.log("del",id);
  }

  return (
    <div className="p-6 w-[100%] mx-auto  min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Services</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md overflow-hidden">
            <FaSearch className="p-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search services..."
              className="p-2 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center gap-2">
            <FaPlus /> Add New Service
          </button>
        </div>
      </div>

      {/* Service List */}
      <div className="bg-white rounded-md shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Service Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Example Row */}
            {
                services.map((service,) => {
                    return(
                        <tr key={service._id}>
              <td className="px-6 py-4 whitespace-nowrap">{service.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {service.description.slice(0,10)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{service.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{service.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{service.status}</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                <button onClick={()=> handleDelete(service._id)} className="text-red-500 flex gap-2 items-center">
                  <FaTrash />
                  <span>Delete</span>
                </button>
              </td>
            </tr>
                    )
                })
            }
            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesPage;
