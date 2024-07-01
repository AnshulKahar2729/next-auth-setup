import { z } from "zod";
export const LoginSchema = z.object({
  email: z.string({
    message: "Please enter a valid email address",
  }).email({
    message : "Please enter a valid email address",
  }),
  password: z.string({
    message: "Please enter a valid password",
  }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
