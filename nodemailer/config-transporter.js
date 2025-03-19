import nodemailer from 'nodemailer';
import 'dotenv/config';

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

transporter.verify()
  .then(() => console.log("Transporter listo para enviar mensajes"))
  .catch((error) => {
    console.log("Error de conexión en el transporter");
    console.log(error);
  }); 