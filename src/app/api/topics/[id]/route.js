// here we create our update operation, here we are using a dynamic route, because we want to get the id of the topic before we delete it in our front end as shown below

import connectMongoDB from "@/config/db";
import Topics from "@/models/topics";
import { NextResponse } from "next/server";
import nodemon from "nodemon";

// here we need two parameter, the request and the param which we can destructure
export async function PUT(request, { params }) {

    // so we can then get the is as follows
    const { id } = params;
    // now we want to  update our topics as follows, we can first get this info from postman
    // get the request inform of json format
    const { newTitle: title, newDescription: description } = await request.json();
    // now after doing all  of this, we then now connect to our mongo db
    await connectMongoDB();
    // finally we update our topics inside mongodb
    await Topics.findByIdAndUpdate(id, { title, description });
    // how do we want next js to response to this? as follows
    return NextResponse({ message: "Topic updated" }, { status: 200 });

}

// how to get a single topic by id

export async function GET(request, { params }) {

    const { id } = params;
    // after getting our id we now connect to mongo db as follows
    await connectMongoDB();
    const topics = await Topics.findOne({ _id: id });
    return NextResponse.json({ topics }, { status: 200 })

}