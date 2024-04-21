import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(1, 'Senha obrigatória'),
});

export type SignInSchema = z.infer<typeof signInSchema>;
