import mongoose from "mongoose";
import  Schema  from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
        min : 2,
    },
    lastName:{
        type: String,
        require: true,
        min : 2,
    },
    email:{
        type: String,
        require: true,
        min : 2,
    },
    password:{
        type: String,
        require: true,
        min : 2,
    },
    picturePath:{
        type: String,
        require: true,
        default:"",
    },
    friends:{
        type: Arry,
        default:[],
    },
    location: String,
    occupation:String,
    viewedProfile:Number,
    impressions:Number,
    },
    {timestamps:true}
    );

    const User = mongoose.model("User",UserSchema);
    export default User;