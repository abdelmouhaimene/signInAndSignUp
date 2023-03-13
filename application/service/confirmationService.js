const confirmationService = (service) => {
   
    const setConfirmed = (confirmation,confirmationCode) =>  service.setConfirmed(confirmation,confirmationCode);  
    return {
        setConfirmed
    };
}
export default confirmationService