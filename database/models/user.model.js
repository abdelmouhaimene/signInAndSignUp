import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema ({
    email:{
        type:String,
        required:true,
        unique: true
    },
    username:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    status: {
        type: String, 
        enum: ['Pending', 'Active'],
        default: 'Pending'
      },
      confirmationCode: { 
        type: String, 
        unique: true },
})
const UserModel =  mongoose.model("User" , UserSchema); 
export default UserModel 