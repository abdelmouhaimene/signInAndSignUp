
import user from "../../../entities/user";
import fetchByProp from "./fetchByProp";
import { getRandomInt } from "../../service/codegenerator.js";
import { encrypt } from "../../service/encrypt.js";
import {sendConfirmationMail} from "../../service/confirmation.js"

export default signup = (data , repo) => {
    if (!data.username || !data.password || !data.email) {
        throw new Error('username, password and email fields cannot be empty');
    }
    else if (fetchByProp(data.username)){
        throw new Error('username used try another');
    }
    else if (fetchByProp(data.email)){
        throw new Error('email used try another');
    }
    const newUser = new user(
        data.email,
        data.username,
        encrypt(data.password).encryptedData,
        getRandomInt(20)
    );
    sendConfirmationMail(newUser,newUser.getConfirmationCode())
    return repo.signup(newUser);
    
}
