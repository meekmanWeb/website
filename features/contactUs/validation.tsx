import { z } from "zod";

export const contactSchema = z.object({
  schoolName: z.string().min(2, "School name is required"),
  address: z.string().min(5, "Address is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormType = z.infer<typeof contactSchema>;
