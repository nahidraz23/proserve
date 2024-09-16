import DashboardProfile from "@/components/DashboardFrofile";
import Image from "next/image";

export default function Profile() {

    return (

        <div>
            <DashboardProfile/>
        </div>
        // <section>
        //     <div className="p-6 bg-white flex flex-col gap-5">

        //         <div className="h-44 w-full bg-primary/60 flex justify-center items-center">
        //             <div className="w-full h-44 mb-4 sm:w-32 sm:h-32 sm:mb-0">
        //                 <img
        //                     src="https://source.unsplash.com/100x100/?portrait?1"
        //                     alt="Profile picture"
        //                     className="object-cover object-center w-full h-full rounded-full border-2"
        //                 />
        //             </div>
        //         </div>
        //         <div className="flex flex-col justify-center space-y-3 pb-5">
        //             <div>
        //                 <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Name: </h2>
        //                 <span className="text-sm text-gray-500 dark:text-gray-400">Category</span>
        //                 <p className="font-bold">Email: </p>
        //                 <p className="font-bold">Successfully Complete: 011</p>
        //             </div>
        //         </div>
        //     </div>

        // </section>
    )
}