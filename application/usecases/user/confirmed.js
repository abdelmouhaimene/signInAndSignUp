import sendConfirmationMail from '../../service/confirmation.js'

function confirmed (user,code,repo) {
    if (user.status === "Active") {
        throw new Error('this acount is activated');
    }else if (user.confirmationCode !== code ){
        throw new Error('the confirmation code is wrong');
    }else {
        return repo.confirmed(user,code);
    }
}

export default confirmed