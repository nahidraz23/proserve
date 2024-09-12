import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const reviewsCollection = db.collection("review");
    const reviews = await reviewsCollection.find().toArray();
    return NextResponse.json(reviews);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "No Data Found", error });
  }
};
