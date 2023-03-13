const confirme = (confirmation,confirmationCode,repo) => {
    if(!confirmationCode  ){
        throw new Error("must insert confirmation code")
    }
    else if(!confirmation.confirmationCode){
        throw new Error("cant get confirmation code from email")
    }
    else if (confirmation.confirmationCode !== confirmationCode){
        throw new Error("wrong confirmation code")
    }
    return  repo.setConfirmed(confirmation,confirmationCode);
}
export default confirme