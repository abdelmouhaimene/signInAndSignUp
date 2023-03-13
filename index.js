import userController from "./controller/userController.js";
import userRepository from "./application/repository/userRepository.js";
// import confirmRepository from "./application/repository/confirmRepository.js";
import mongoDbRepository from "./framework/database/mongoDbRepository.js";
import { dbConnection,dbDisconnection } from "./framework/database/mongo.js";




import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import express from 'express';
const app = express();
import path from 'path';
import hbs from 'hbs';
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
const templatePath = path.join(__dirname,'./framework/templates/templates');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.json());
app.set('view engine','hbs');
app.set("views",templatePath);

const controller = userController(userRepository,mongoDbRepository );


app.get('/', (req,res) => {
    res.render("home");
});

app.get('/login',(req,res)=>{
    res.render("login")
});

app.get('/signup',(req,res)=>{
    res.render("signup")
});
app.get('/confirm',(req,res)=>{
    res.render("confirm")

})
app.post("/signup", async (req, res) => {
    const confirmation = await controller.createConfirm(req,res); 
    res.cookie("confirmation" , confirmation)
    res.render("confirm")
});

app.post("/confirm" ,async (req,res) => {
    const newreq = {
        data : req.cookies.confirmation,
        confirmationCode : req.body
    } 
    console.log(newreq)
    await controller.addUserToBd(newreq,res)
        res.render("login")

});

app.post('/login' ,async (req,res) => {
    await controller.Userlogin(req,res).then(()=>{
        res.render("home");
    })
});

app.listen(3000,()=> {
    console.log("port connected");
    dbConnection();

}); 




// const controller = userController(userRepository,mongoDbRepository );

// const user = {
//     email: "assilaabdelmouhaimene@yahoo.com",
//     username: "abdelmouhaimene",
//     password: "test",
// }
// //const confirm = "SkXgPjekj5EIFVJMREX8"
// await controller.setLogin(user)
// //console.log(await controller.FindUserByprop("assilaabdhaimene@yahoo.com"));
