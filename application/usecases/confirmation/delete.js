async function deleteConfirm  (confirmation,repo) {
    if (!confirmation.email) {
        throw new Error('no email or no confirtmation code');
    }
    else if (! await repo.fetchEmail(confirmation.email)){
        throw new Error('email not exist');
    }
    return await repo.deleteConfirm(confirmation);
    
}

export default deleteConfirm