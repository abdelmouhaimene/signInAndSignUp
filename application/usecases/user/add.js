import user from "../../../entities/user.js";
async function add  (data , repo) {
    if (!data.username || !data.password || !data.email) {
        throw new Error('username, password and email fields cannot be empty');
    }
    else if (await repo.fetchByProp(data.username)){
        throw new Error('username used try another');
    }
    else if (await repo.fetchByProp(data.email)){
        throw new Error('email used try another');
    }
    const newUser = new user(
        data.email,
        data.username,
        data.password,
    );

    return await repo.add(newUser);

}

export default add;