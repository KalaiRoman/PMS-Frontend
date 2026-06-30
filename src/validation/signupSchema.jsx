import { z } from "zod";

const signupSchema = z.object({
  name: z.string().min(1,"Name is Required"),
  email: z.string().email("Please enter a valid Email ID"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export default signupSchema;
