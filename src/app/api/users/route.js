import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const usersCollection = db.collection("users");
    const user = await usersCollection.insertOne(request.body);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "No Data Found", error });
  }
};
