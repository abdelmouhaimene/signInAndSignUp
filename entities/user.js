export default user = (email, username, password, confirmationCode, status) => {
    return {
        getEmail: () => email,
        getUserName: () => username,
        getPassword: () => password,
        getConfirmationCode : () => confirmationCode,
        getStatus: () => status
        
    };
}