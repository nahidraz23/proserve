import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
    const services = await request.json();
  
    console.log("hit in con",services);
    const db = await connectDB();
    const requestedServiceCollection = db.collection("requested-service");
    try {
      const res = await requestedServiceCollection.insertOne(services);
      return Response.json(
        { message: "request Service Successfully" },
        { status: 200 }
      );
    } catch (error) {
      return Response.json({ message: "Something Went Wrong" }, { status: 400 });
    }
  };