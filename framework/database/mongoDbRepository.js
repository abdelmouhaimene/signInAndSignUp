import UserModel from "./models/user.model.js";
import ConfirmationModel from "./models/confirmation.model.js"



function mongoDbRepository(){
    const fetchEmail = async (prop) => {
        const find = await ConfirmationModel.findOne({ email: prop  });
        return find
    }
    const fetchByProp = async (prop) => {
        const find = await UserModel.findOne({ email: prop  });
        return find
    }
    const add = async (userEntity) => {
        const user = {
            email: userEntity.getEmail(),
            username: userEntity.getUserName(),
            password: userEntity.getPassword(),
        }
        const datainserted = await UserModel.insertMany([user])
        return datainserted
    }

    const deleteConfirm = async (confirmation) =>{
        await ConfirmationModel.findOneAndDelete([confirmation])
    }
    const addNotConfirmedUser = async (confirmationEntity) =>{
        const confirmation = {
            email: confirmationEntity.getEmail(),
            confirmationCode: confirmationEntity.getConfirmationCode(),
            createdAt: confirmationEntity.getCreatedAt()
        }
        const datainserted = await ConfirmSchema.insertMany([confirmation])
        return datainserted
    }
    const login = async(data) => {
        const find = await UserModel.find({ email: data.email , password:data.password  });
        return find
    }
    return{
        deleteConfirm,
        addNotConfirmedUser,
        fetchByProp,
        add,
        fetchEmail,
        login
    }
}

export default mongoDbRepository;