import { FaTrash } from "react-icons/fa6";

const AllUsers = ({users}) => {
  console.log("adgfuyfwyf",users);

  return (
    <div className="mx-auto px-4 w-[100%] ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {/* is here change */}
        All Users , is here
      </h1>

      {/* Responsive table container */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Completed Services
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.length > 0 && users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {user.completed_service}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-red-600 hover:text-red-900 flex items-center space-x-1">
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

// const users = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     role: "User",
//     completed_service: 5,
//   },
//   {
//     id: 2,
//     name: "Alice Smith",
//     email: "alice.smith@example.com",
//     role: "Admin",
//     completed_service: 12,
//   },
//   {
//     id: 3,
//     name: "Bob Johnson",
//     email: "bob.johnson@example.com",
//     role: "Agent",
//     category: "Home Services",
//     completed_service: 8,
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     email: "emily.davis@example.com",
//     role: "User",
//     completed_service: 3,
//   },
//   {
//     id: 5,
//     name: "Michael Brown",
//     email: "michael.brown@example.com",
//     role: "Admin",
//     completed_service: 15,
//   },
//   {
//     id: 6,
//     name: "Linda Taylor",
//     email: "linda.taylor@example.com",
//     role: "Agent",
//     completed_service: 9,
//   },
//   {
//     id: 7,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     role: "User",
//     completed_service: 0,
//   },
//   {
//     id: 8,
//     name: "Sarah Martinez",
//     email: "sarah.martinez@example.com",
//     role: "Agent",
//     completed_service: 7,
//   },
//   {
//     id: 9,
//     name: "Robert Clark",
//     email: "robert.clark@example.com",
//     role: "User",
//     completed_service: 2,
//   },
//   {
//     id: 10,
//     name: "Karen Lewis",
//     email: "karen.lewis@example.com",
//     role: "Admin",
//     completed_service: 11,
//   },
// ];
