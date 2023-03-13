const confirme = (confirmation,confirmationCode) => {
    if(!confirmationCode  ){
        throw new Error("must insert confirmation code")
    }
    else if(!confirmation.confirmationCode){
        throw new Error("cant get confirmation code from email")
    }
    else if (confirmation.confirmationCode !== confirmationCode.code){
        throw new Error("wrong confirmation code")
    }
    return  true;
}
export default confirme