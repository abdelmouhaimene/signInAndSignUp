
import { encrypt } from "../application/tools/encrypt.js"
import getRandomInt from "../application/tools/codegenerator.js";
import sendConfirmationMail from "../application/tools/sendConfirmationMail.js";
import addNotConfirmedUser from "../application/usecases/confirmation/add.js";
import add from "../application/usecases/user/add.js";
import deleteConfirm from "../application/usecases/confirmation/delete.js";
import confirme from "../application/tools/conftool.js";
import login from "../application/usecases/auth/login.js"
//import setConfirmed from "../application/usecases/confirm/confirm.js";

function usercontroller(
    userRepository,
    dbUserRepository,
    //confirmRepository,
    // authRepository,


) {
    const userRepo = userRepository(dbUserRepository());
    //const confirmRepo = confirmRepository(dbUserRepository());
    //const authRepo = authRepository(dbUserRepository());
    const createConfirm = async (req, res) => {
        const userData =
        {
            email: req.body.email,
            username: req.body.username,
            password: encrypt(req.body.password).encryptedData,
        };
        const ConfirmData = {
            email: req.body.email,
            confirmationCode: getRandomInt(6)
        }
        await addNotConfirmedUser(ConfirmData, userRepo).then(() => {
            sendConfirmationMail(userData, ConfirmData.confirmationCode)
            console.log("sent a confirmation code to : " + userData.email)
        }).catch((error) => {
            res.send(error)
        })
        const returnedValue = {
            userData: userData,
            ConfirmData: ConfirmData
        }
        return returnedValue;
    }
    const addUserToBd = async (req, res) => {
        if (confirme(req.data.ConfirmData, req.confirmationCode)) {
            await add(req.data.userData, userRepo).then(async () => {
                await deleteConfirm(req.data.ConfirmData, userRepo).then(() => {
                    console.log("user account : " + req.data.userData.email + ", is confirmed")
                }).catch((error) => {
                    res.send(error)
                })
            }).catch((error) => {
                res.send(error)
            })
        }

    }

    const Userlogin = async (req, res) => {
        const data = {
            email : req.body.email, 
            password :encrypt(req.body.password).encryptedData
        }
        await login(data, userRepo).then(()=>{
            console.log("login to : " + req.body.email)
        }).catch((error) => {
            res.send(error)
        })
        
    }


    // const FindUserByprop = async (prop) => {
    //     return await fetchByProp(prop,dbRepository)

    // }
    // const setLogin = async (user) => {
    //     await login(user,authRepo)
    // }

    return {
        addUserToBd,
        Userlogin,
        createConfirm
    }

}


export default usercontroller