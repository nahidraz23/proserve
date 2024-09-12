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
    const handleServiceGet = async (user) =>{
        
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
        console.log("post ", result);
    }

    return (
        <div className="pt-20">
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <h2 className="md:text-5xl text-3xl pb-5 font-bold text-center text-gray-800">Team of {params?.category.replace("%20", " ")}</h2>

                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {
                        users.map((user) => {
                            return (
                                    <div key={user._id} className="w-full max-w-xs text-center relative">
                                        <img className="object-cover object-center w-48 h-48 rounded-full mx-auto" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

                                        <p className={`h-8 w-8 ${user.isActive =="active" ? "bg-green-400" : "bg-red-400" } rounded-full absolute top-0 left-16`}></p>

                                        <div className="mt-2">
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{user?.name}</h3>
                                            <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{user?.category}</span>
                                        </div>
                                        {/* get service button */}
                                        <div className="flex justify-center cursor-pointer">
                                        <button onClick={()=>handleServiceGet(user)}>
                                        <IoMdAddCircle className="text-primary" size={36} />
                                        </button>
                                        </div>
                                    </div>
                            )
                        })
                    }
                    </div>

                </div>
            </section>


        </div>



    )
}