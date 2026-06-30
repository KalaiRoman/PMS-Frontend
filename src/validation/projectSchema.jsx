import { z } from "zod";

const projectSchema = z.object({
  projectName: z.string().min(1, "Please enter Project Name"),
  clientName: z.string().min(1, "Please enter Client Name"),
  description: z.string().min(1, "Please enter Description"),
  users: z.array(z.string()).min(1, "Please select at least one user"),
  projectLead: z.string().min(1, "Please select Project Lead"),
  color: z.string().min(1, "Please Select Color")
});
export default projectSchema;
