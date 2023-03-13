import confirmation from "../../../entities/confirmation.js"

async function addNotConfirmedUser  (data , repo) {
    if (!data.email) {
        throw new Error('no email or no confirtmation code');
    }
    else if (await repo.fetchEmail(data.email)){
        throw new Error('used email try another');
    }else if (await repo.fetchByProp(data.email)) {

    }
    const newConfirmation = new confirmation(
        data.email,
        data.confirmationCode,
        new Date()
    );
    
    return await repo.addNotConfirmedUser(newConfirmation);
    
}

export default addNotConfirmedUser;