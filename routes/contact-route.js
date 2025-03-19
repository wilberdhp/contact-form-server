import { Router } from "express";
import { ContactSchema } from '../schemas/contactoSchema.js';
import { sendEmail } from '../nodemailer/config-mensaje.js';

export const contact = new Router();

contact.post('/', async (req, res) => {
  try {
    const data = req.body;
    ContactSchema.parse(data);
    const { name, email, message } = data;

    await sendEmail(name, email, message, res);
    
  } catch (error) {
    res.status(404).json({ success: false, message: "The data entered is incorrect."})
    console.log(error);
  }
})