import user from "../../../entities/user";

export default login = (data,repo) => {
    if (!data.password || !data.email) {
        throw new Error('username, password and email fields cannot be empty');
    }
    const loginUser = new user(
        data.email,
        data.password
    );
    return repo.login(loginUser)
}