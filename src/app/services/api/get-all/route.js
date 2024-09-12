import { connectDB } from "@/lib/connectDB";

export const GET = async (request) => {

  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const service = await servicesCollection.find().toArray();
    return Response.json({ service });
  } catch (error) {
    console.log(error);
  }
};