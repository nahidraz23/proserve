import { connectDB } from "@/lib/connectDB";

export const GET = async (request) => {

  const db = await connectDB();
  const usersCollection = db.collection("users");
  try {
    const users = await usersCollection.find().toArray();
    return Response.json(users);
  } catch (error) {
    console.log(error);
  }
};