function user (email, username, password)  {
    return {
        getEmail: () => email,
        getUserName: () => username,
        getPassword: () => password,
    };
}
export default user