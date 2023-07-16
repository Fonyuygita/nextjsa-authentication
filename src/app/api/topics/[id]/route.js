

import connectMongoDB from "@/config/db";
import Topics from "@/models/topics";
import { NextResponse } from "next/server";
import nodemon from "nodemon";

//  UPDATE A SINGLE TOPIC BASED ON ID 
export async function PUT(request, { params }) {


    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();

    await connectMongoDB();

    await Topics.findByIdAndUpdate(id, { title, description });
   
    return NextResponse({ message: "Topic updated" }, { status: 200 });

}

// GET A SINGLE TOPIC BASED ON THEIR ID

export async function GET(request, { params }) {

    const { id } = params;
    
    await connectMongoDB();
    const topics = await Topics.findOne({ _id: id });
    return NextResponse.json({ topics }, { status: 200 })

}