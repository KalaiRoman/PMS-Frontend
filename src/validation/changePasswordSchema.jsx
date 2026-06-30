import { z } from "zod";

const changePasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters")
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Password and Confirm Password do not match",
    path: ["confirmPassword"]
  });

export default changePasswordSchema;
