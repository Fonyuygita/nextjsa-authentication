
import connectMongoDB from "@/config/db";
import Users from "@/models/Users";
import bcrypt from "bcrypt.js";
import { NextResponse } from "next/server";

export const  POST=async(request)=>{
const {name, email, password}=await request.json();
await connectMongoDB();
const hashedPassword=bcrypt.hash(password, 5);
const newUser=new Users({
    name, email, password:hashedPassword
})
try {
    
    await newUser.save();

    return new NextResponse("user has been created", {status:201});

} catch (err) {
    
}

}