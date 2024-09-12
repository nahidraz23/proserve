import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb"; // Import ObjectId

export const GET = async (request, { params }) => {
  console.log("api", params);
  const db = await connectDB();
  const usersCollection = db.collection("users");

  try {
    // Convert params.id to ObjectId for MongoDB query
    const users = await usersCollection.find({ category: params.category}).toArray();
    if (users) {
      return new Response(JSON.stringify(users), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ message: "Service not found" }), { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch service" }), { status: 500 });
  }
};