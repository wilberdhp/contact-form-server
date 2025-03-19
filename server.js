import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { contact } from './routes/contact-route.js';

const app = express();

app.disable("x-powered-by");

// Middleware's
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use('/send-mail', contact)

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
})