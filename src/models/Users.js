// create the user model here
import mongoose from "mongoose";

const {Schema}=mongoose;
const userSchema=new Schema({
    name:{
    type:String,
    unique:true,
    required:true
    },

   email: {
    type:String,
    unique:true,
    required:true

    },

    password:{
        type:String,
        unique:true,
        required:true
    }
}, {timestamps:true})



// provide our model to the rest of the application
const Users=mongoose.models.Users || mongoose.model("User", userSchema);

export default Users;