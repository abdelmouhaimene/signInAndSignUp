function userRepository (repository) {
    const fetchByProp = async (prop) => await repository.fetchByProp(prop);
    const add = async (user) => await repository.add(user);
    const addNotConfirmedUser = async (newConfirmation) => await repository.addNotConfirmedUser(newConfirmation);
    const deleteConfirm = async (confirmation) => await repository.deleteConfirm(confirmation);
    const fetchEmail = async (prop) => await repository.fetchEmail(prop)
    const login = async (data) => {await repository.login(data)}
    return {
      fetchByProp,
      add,
      addNotConfirmedUser,
      deleteConfirm,
      fetchEmail,
      login
    };
}

export default userRepository
