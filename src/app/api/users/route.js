import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {

  const user = await request.json();
  try {
    const db = await connectDB();
    const usersCollection = db.collection("users");
    const result = await usersCollection.insertOne(user);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return [];
  }
};
