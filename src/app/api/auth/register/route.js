// route to register user to our application

import connectMongoDB from "@/config/db";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export const POST=async(request)=>{
// get user from the client side(register page)
const {name, email, password}=await request.json();
// connect to mongoDb after getting user details
await connectMongoDB();
// hashed password && create new user
const hashedPassword=bcrypt.hash(password, 5);
const newUser=new User({name, email, password:hashedPassword})
try {

// now save our user into mongo db, if everything is ok
await newUser.save();
return new NextResponse({msg:"user has been created"}, {status:201})
    
} catch (err) {
    throw new Error("user was not successfully created")
    
}

}