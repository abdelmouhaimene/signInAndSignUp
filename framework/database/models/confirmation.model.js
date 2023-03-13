import mongoose from 'mongoose';
const ConfirmSchema = new mongoose.Schema ({
    email:{
        type:String,
        required:true,
        unique: true
    },
    confirmationCode: { 
        type: String, 
        unique: true 
    },
    createdAt:{
        type : Date
    }
    
})
const ConfirmationModel =  mongoose.model("Confirmation" , ConfirmSchema); 
export default ConfirmationModel 