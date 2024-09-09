import { connectDB } from "@/lib/connectDB";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const reviewsCollection = db.collection("review");
    const reviews = await reviewsCollection.find().toArray();
    return Response.json({ reviews });
  } catch (error) {
    console.log(error);
  }
};
