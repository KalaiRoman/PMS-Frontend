import { z } from "zod";

const forgetpasswordSchema = z.object({
  email: z.string().email("Please Enter Valid Email ID")
});
export default forgetpasswordSchema;
