import mongoose from "mongoose"
const {Schema}=mongoose;

const topicSchema=new Schema(

    {
        title:String,
        description:String
    },{timestamps:true}
);

const Topics= mongoose.models.Topics||mongoose.model("Topic", topicSchema)
export default Topics