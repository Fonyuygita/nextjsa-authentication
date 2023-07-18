import connectMongoDB from "@/config/db";
import Topics from "@/models/topics";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description}=await request.json();
    // connect to mongodb
    await connectMongoDB();

    // create topic
    await Topics.create({title, description})
    return NextResponse.json({message:"topic created"}, {status:201})
}


//  GET REQUEST HERE TO GET DATA FROM OUR MONGODB
export async function GET(){
   
    await connectMongoDB();
   

     const topics=await Topics.find();

     return NextResponse.json({topics})
}


export async function DELETE(request){
    
    const id=request.nextUrl.searchParams.get("id");
   
    await connectMongoDB();
    
    await Topics.findByIdAndDelete(id);
    return NextResponse.json({message:"user successfully deleted"}, {status:200});
    
}