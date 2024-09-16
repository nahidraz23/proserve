"use client"
import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";


export default function Category({ params }) {
    const [users, setUsers] = useState([])
    console.log(users);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`http://localhost:3000/checkout/api/${params.category}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch service");
                }
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error("Failed to fetch service:", error);
            }
        };

        fetchUsers();
    }, [params.category]);


    // login user (who get service)
    const loginUser = {
        name: "zahid",
        email: "zahid@gmail.com",
    }

    // service provider data
    const handleServiceGet = async (user) => {

        const sendData = {
            // status have pending to done
            status: "pending",
            loginUser: loginUser.email,
            ...user
        }
        console.log(sendData);

        const resp = await fetch("http://localhost:3000/checkout/api/get-service", {
            method: "POST",
            body: JSON.stringify(sendData),
            headers: {
                "content-type": "application/json",
            },
        });
        const result = await resp.json()
        if(result){
            toast.success('Added Successfully!');
        }
        console.log("post ", result);
    }

    return (
        <div className="pt-20">
            <section className="bg-white dark:bg-gray-900">
                {/* banner */}

                <section className="relative w-full md:h-[220px] h-[160px] bg-gray-800">
                    {/* Background Image */}
                    <img
                        src="https://i.postimg.cc/xT2trqft/service.jpg"
                        alt="Service"
                        className="absolute inset-0 object-cover bg-cover w-full h-full opacity-70"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    {/* Banner Content */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-center text-white">
                            <h1 className="text-4xl font-bold md:text-6xl">
                                {params?.category.replace("%20", " ")}
                            </h1>
                            <p className="mt-4 text-lg md:text-2xl">
                                Providing the best solutions for your needs
                            </p>
                        </div>
                    </div>
                </section>

                <div className="container px-6 py-8 mx-auto">
                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {users.map((user) => (
                            <div key={user._id} className="w-full max-w-xs text-center relative group">
                                <div className="relative">
                                    {/* Image */}
                                    <img
                                        className="object-cover object-center w-48 h-48 rounded-full mx-auto transition duration-200 group-hover:blur-sm"
                                        src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                                        alt="avatar"
                                    />

                                    {/* Active Status Indicator */}
                                    <span
                                        className={`h-8 w-8 ${user.isActive === 'active' ? 'bg-green-400' : 'bg-red-400'
                                            } rounded-full absolute top-0 left-16`}
                                    ></span>

                                    {/* Button (Hidden by default, shows on hover) */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <button onClick={() => handleServiceGet(user)}>
                                            <IoMdAddCircle className="text-white" size={45} />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                                        {user?.name}
                                    </h3>
                                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                                        {user?.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>


        </div>
    )
}