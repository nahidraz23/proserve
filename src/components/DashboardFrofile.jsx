"use client";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import { useContext, useState } from "react";

const DashboardProfile = () => {
  const { user } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [profile, setProfile] = useState({
    Name: "Name not set yet",
    email: user?.email || "user@example.com",
    role: "User", // Assuming a default role
    aboutMe:
      "I'm a web designer, I work in programs like Figma, Adobe Photoshop, Adobe Illustrator",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const handleSave = () => {
    console.log("Profile saved:", profile);
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg w-4/5 p-8">
        <div className="relative w-full pt-[25%]">
          <Image
            src="/banner.jpg"
            alt="cover photo"
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>
        <div className="flex border rounded-b-2xl">
          {/* Left Section */}
          <div className="w-1/3 p-6 -mt-36">
            <h2 className="text-xl font-semibold text-gray-700 text-center">
              Profile
            </h2>
            <div className="flex flex-col items-center mt-6  ">
              {/* Profile Image */}
              <div className="relative w-36 h-36">
                <img
                  src="/Avatar.png"
                  alt="Profile Avatar"
                  className="w-full h-full rounded-full object-cover bg-blue-600 hover: p-1 "
                />
              </div>
              <div className="border-r border-gray-200 flex flex-col items-center text-center pr-8">
                <h3 className="mt-4 text-lg font-semibold">{profile.Name}</h3>
                {/* Stats */}
                <div className="mt-6 flex justify-between w-full text-center ">
                  <div>
                    <p className="font-bold text-gray-700">21</p>
                    <p className="text-sm text-gray-500">Shots</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700">238</p>
                    <p className="text-sm text-gray-500">Followers</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700">101</p>
                    <p className="text-sm text-gray-500">Following</p>
                  </div>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Add new avatar
                </button>
                <p className="mt-4 text-gray-500 text-sm">
                  Uzbekistan, Tashkent
                </p>
                <p className="mt-2 text-gray-500 text-sm">{profile.aboutMe}</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-2/3 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Basic Info
              </h3>
              <div className=" flex gap-5 items-center">
                {isEditing ? (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-3 border border-gray-400 text-gray-500 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={handleSave}
                      href="#_"
                      class="relative inline-block text-lg group"
                    >
                      <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-blue-600 rounded-lg group-hover:text-white">
                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-600 group-hover:-rotate-180 ease"></span>
                        <span class="relative">Save Changes</span>
                      </span>
                      <span
                        class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                        data-rounded="rounded-lg"
                      ></span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={toggleEdit}
                    href="#_"
                    class="relative inline-block text-lg group"
                  >
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-blue-600 rounded-lg group-hover:text-white">
                      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-600 group-hover:-rotate-180 ease"></span>
                      <span class="relative"> Edit </span>
                    </span>
                    <span
                      class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </button>
                )}
              </div>
            </div>

            <div className="">
              {isEditing ? (
                <>
                  <strong>Name:</strong>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={profile.Name}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded-lg w-full  mb-2"
                  />
                  <strong>Email:</strong>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={profile.email}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded-lg mb-2 w-full"
                  />
                  <strong>Role:</strong>
                  <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={profile.role}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded-lg mb-2 w-full"
                  />

                  <strong>About Me:</strong>
                  <textarea
                    name="aboutMe"
                    placeholder="About Me"
                    value={profile.aboutMe}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded-lg  w-full"
                  ></textarea>
                </>
              ) : (
                <>
                  <p className="text-gray-600 border border-gray-300 p-2 rounded-lg mb-4 w-full">
                    <strong>Name:</strong> {profile.Name}
                  </p>
                  <p className="text-gray-600 border border-gray-300 p-2 rounded-lg mb-4 w-full">
                    <strong>Email:</strong> {profile.email}
                  </p>
                  <p className="text-gray-600 border border-gray-300 p-2 rounded-lg mb-4 w-full">
                    <strong>Role:</strong> {profile.role}
                  </p>
                  <p className="text-gray-600 border border-gray-300 p-2 rounded-lg w-full">
                    <strong>About Me:</strong> {profile.aboutMe}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
