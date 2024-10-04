import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  userame: z.string().min(2),
});
