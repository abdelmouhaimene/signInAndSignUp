export default userRepository = (repository) => {
    const fetchByProp = (prop) => repository.fetchByProp(prop);
    const signin = (user) =>  repository.signin(user);
    const login = (user) => repository.login(user);
    const confirmed = (user,code) => repository.confirmed(user,code)
    return {
      fetchByProp,
      signin,
      login,
      confirmed
    };
  }
