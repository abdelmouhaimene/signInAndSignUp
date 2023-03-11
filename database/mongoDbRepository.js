import UserModel from "./models/user.model.js";
import { dbConnection,dbDisconnection } from "./mongo.js";

function mongoDbRepository(){
    dbConnection()
    signin = async (userEntity) => {
        const user = {
            email: userEntity.getEmail(),
            username: userEntity.getUserName(),
            password: userEntity.getPassword(),
            confirmationCode: userEntity.getConfirmationCode()
        }
        await UserModel.insertMany([user]);
        return user;
    }
    fetchByProp = async (prop) => {
        const find = await UserModel.findOne({ email: prop  }).exec();
        return find;
    }
    confirmed = async (user,code) => {
        const res = await UserModel.updateOne({ email: user.getEmail }, { status: 'Active' });
        return res
    }
    login = async(user) => {
        const find = await UserModel.findOne({ email: user.email , password: user.password }).exec(); 
        if (find.status === 'Pending') {
            console.log('email not confirmed yet')
        }else {
            console.log('welcom : ' +find.username)
        }
    }
}

export default mongoDbRepository;