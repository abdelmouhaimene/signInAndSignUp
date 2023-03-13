const login = async (data,repo) => {
    if(!data.email || !data.password  ){
        throw new Error("must insert both email and password")
    }else if(await repo.fetchEmail(data.email)){
        throw new Error("email not confirmed yet")
    }else if (! await repo.fetchByProp(data.email)){
        throw new Error("email not exist")
    }
    return await repo.login(data);
}
export default login

