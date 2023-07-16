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
    // first connect to your db because we want to get data from there
    await connectMongoDB();
    // find topics from the db using fin() method

     const topics=await Topics.find();

     return NextResponse.json({topics})
}
// now lets create the  delete method to delete our data from mongo db

export async function DELETE(request){
    // so, since we are deleting, we need the id of what we are deleting in the source parameter
    // so we proceed as follows
    // to get the search param, we do the following using nextUrl.searchparams.get
    const id=request.nextUrl.searchParams.get("id");
    // connect tto mongo
    await connectMongoDB();
    // which will store the id, inside id constant
    // so, we use findByIdAndDelete method, to finally delete our topics
    await Topics.findByIdAndDelete(id);
    return NextResponse.json({message:"user successfully deleted"}, {status:200});
    // now go ahead to postman/insomnia and try the following
// http://localhost:3000/api/topics/?id={copy id string from mongodb and paste here}
}