import Category from "@/app/checkout/[category]/page";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDeleteForever } from "react-icons/md";

const AllUsers = ({users}) => {
  console.log("map uuu",users);

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-20">
        User Management
      </h1>
      <Table className="bg-white shadow-lg rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow className="bg-gray-800">
            <TableHead className="text-white px-4 py-2">ID</TableHead>
            <TableHead className="text-white px-4 py-2">Name</TableHead>
            <TableHead className="text-white px-4 py-2">Email</TableHead>
            <TableHead className="text-white px-4 py-2">Role</TableHead>
            <TableHead className="text-white px-4 py-2 text-center">Completed Services</TableHead>
            <TableHead className="text-white px-4 py-2">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user, index) => (
            <TableRow
              key={index}
              className={`transition duration-200 ease-in-out hover:bg-gray-100 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <TableCell className="px-4 py-3 font-medium text-gray-700">{user.id}</TableCell>
              <TableCell className="px-4 py-3">{user.name}</TableCell>
              <TableCell className="px-4 py-3">{user.email}</TableCell>
              <TableCell className="px-4 py-3">{user.role}</TableCell>
              <TableCell className="px-6 pr-10  text-center">{user.completed_service}</TableCell>
              <TableCell className="px-4 py-3 text-center">
                <MdDeleteForever
                  className="text-red-600 cursor-pointer hover:text-red-500 transition duration-200"
                  size={26}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
