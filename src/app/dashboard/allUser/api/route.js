import { connectDB } from '@/lib/connectDB'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const db = await connectDB()
    const usersCollection = db.collection('users')
    const users = await usersCollection.find().toArray();
    console.log(users)
    return NextResponse.json(users)
  } catch (error) {
    console.log(error)
  }
}
