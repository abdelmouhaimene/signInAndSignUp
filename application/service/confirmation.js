import nodemailer from 'nodemailer'
import { sender } from '../repository/emailSender.js';

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service:'Gmail',
    secure: false,
    auth: {
        user: sender.email,
        pass: sender.password
    },
    debug: false,
    logger: true
  });

function sendConfirmationMail (reciver, confirmationCode) {

    transport.sendMail({
        from: sender.email,
        to: reciver.email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
            <h2>Hello ${reciver.username}</h2>
            <p>Thank you for subscribing. Please confirm your email with the confirmation code : </p>
            ${confirmationCode}
            </div>`,
      }).catch(err => console.log(err));
}




export default sendConfirmationMail;