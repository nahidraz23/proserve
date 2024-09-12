import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb"; // Import ObjectId

export const GET = async (request, { params }) => {
  console.log("api", params);
  const db = await connectDB();
  const servicesCollection = db.collection("services");

  try {
    // Convert params.id to ObjectId for MongoDB query
    const service = await servicesCollection.findOne({ _id: new ObjectId(params.id) });
    if (service) {
      return new Response(JSON.stringify(service), {
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
