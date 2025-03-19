import z from 'zod';

export const ContactSchema = z.object({
  name: z.string({
    required_error: "El nombre es requerido",
    invalid_type_error: "El nombre debe ser un texto"
  }).min(3, {
    message: "El nombre tiene que ser un texto de más de 3 caracteres"
  }),
  email: z.string({
    required_error: "El email es requerido",
    invalid_type_error: "El email debe ser un texto"
  }).email({
    message: "Email inválido"
  }).min(7, {
    message: "El email tiene que ser un texto de más de 7 caracteres"
  }),
  message: z.string({
    required_error: "El mensaje es requerido",
    invalid_type_error: "El mensaje debe ser un texto"
  }).min(10, {
    message: "El mensaje tiene que ser un texto de más de 10 caracteres"
  })
})