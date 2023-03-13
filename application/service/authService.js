import user from "../../../entities/user.js";
import {encrypt} from '../../service/encrypt.js'

async function login  (data,repo) {
    if (!data.password || !data.email) {
        throw new Error('username, password and email fields cannot be empty');
    }
    const loginUser = new user(
        data.email,
        null,
        encrypt(data.password).encryptedData
    );
    return await repo.login(loginUser)
}

export default login