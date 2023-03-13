function confirmation (email, confirmationCode, createdAt)  {
    return {
        getEmail: () => email,
        getConfirmationCode: () => confirmationCode,
        getCreatedAt : () => createdAt
    };
}
export default confirmation;