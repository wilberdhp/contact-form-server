import { transporter } from "./config-transporter.js";
import 'dotenv/config';

export const sendEmail = async (name, email, message, res) => {
  try {
    await transporter.sendMail({
      from: `${name} < ${email} >`,
      to: process.env.EMAIL,
      sender: email,
      replyTo: email,
      subject: "Mensaje de prueba",
      html: `
        <h1>Mensaje de prueba</h1>
        <p><strong>Nombre</strong>: ${name}</p>
        <p><strong>Email</strong>: ${email}</p>
        <hr />
        <h2>Mensaje</h2>
        <p>${message}</p>
      `
    })

    res.status(200).json({ success: true, message: "Mail Sent."});

  } catch (error) {
    res.status(500).json({ success: false, message: "Error sending email."});
    
    console.log("Error de conexión al configurar el mensaje.");
    console.log(error)
  }
}  