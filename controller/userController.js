import {signup} from "../application/usecases/user/signup.js";
import {login} from "../application/usecases/user/login.js";
import {fetchByProp} from "../application/usecases/user/fetchByProp.js";
import {confirmed} from "../application/usecases/user/confirmed.js";

export default usercontroller = (userRepository,dbUserRepository) => {
    const dbRepository = userRepository(dbUserRepository);
    const addUserToBd = (user) => {
        const userData =
        {   
            email : user.email,
            username :user.username, 
            password : user.password
        };
        signup(userData,dbRepository)
        .then(() => {
            console.log("done");
        })
        .catch((Error) => {
            console.log(Error);
        });
    }
    const FindUserByprop = (prop) => {
        fetchByProp(prop,dbRepository).
        then(() => {
            console.log("done");
        })
        .catch((Error) => {
            console.log(Error);
        });
    }
    const setConfirmed =  (user,code) => {
        confirmed(user,code,dbRepository)
        .then(() => {
            console.log("done");
        })
        .catch((Error) => {
            console.log(Error);
        });
    }

    return {
        addUserToBd,
        FindUserByprop,
        setConfirmed
    }

} 