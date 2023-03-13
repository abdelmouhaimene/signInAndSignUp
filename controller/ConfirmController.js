import confirme from '/../application/use_cases/confirm/confirm.js';

export default function authController(
  userDbRepository,
  userDbRepositoryImpl,
  confirmServiceInterface,
  confirmServiceImpl
) {
  const userRepo = userDbRepository(userDbRepositoryImpl());
  const confirmRepo = confirmServiceInterface(confirmServiceImpl());

  const addUserToBd = async (req,res) => {
        confirme(req.body.ConfirmData,req.body.confirmationCode,confirmRepo).then(async() => {
        console.log("is here");
        await add(req.userData,userRepo).then(async()=>{
            await deleteConfirm(req.ConfirmData,userRepo)
        }) 
    })
}
  return {
    addUserToBd
  };
}