import mongoose from 'mongoose';

// import { encrypt,decrypt } from '../application/service/encrypt.js';
// import getRandomInt from '../application/service/codegenerator.js';
// import UserModel from './models/user.model.js';
// import sendConfirmationMail from '../application/service/confirmation.js'

export const dbConnection = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/testing")
    .then(() => {
        console.log("db connected : " );
    })
    .catch(() => {
        console.log("db not connected");
    })
}

export const dbDisconnection = () => {
    mongoose.connection.close().then(()=>{
        console.log("db disconnect : ")
    }).catch(() => {
        console.log("disconnection failed")
    })
}




 //dbConnection();



// const user = {
//     email: "assilaabdelmouhaimene@yahoo.com",
//     username: "assilaabdelmouhaimene@yahoo.com",
//     password: encrypt("assilaabdelmouhaimene@yahoo.com").encryptedData,
//     confirmationCode : getRandomInt(20)
// }




//const find = await UserModel.findOne({ email: "email@email.com"  }).exec();
//const res = await UserModel.updateOne({ email: "email@email.com" }, { status: 'Active' });


// UserModel.insertMany( [user]);

// const find = await UserModel.findOne({ password: encrypt("email@email.com").encryptedData }).exec();
// console.log(find)


 // dbDisconnection();

//sendConfirmationMail(test,code) ;

