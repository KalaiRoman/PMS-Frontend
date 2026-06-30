import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Please Enter Email ID"),
  password: z.string().min(6, "Password Must be 6 Character")
});
export default loginSchema;
