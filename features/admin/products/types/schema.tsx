import { z } from "zod";

export const productCategories = [
  "nursery",
  "primary",
  "secondary",
  "tertiary",
] as const;

export const createProductSchema = z.object({
  title: z
    .string()
    .min(2, "Book title must be at least 2 characters.")
    .max(120, "Book title must be 120 characters or fewer."),
  classes: z.string().min(1, "Classes is required."),
  categories: z.enum(productCategories, {
    required_error: "Category is required.",
  }),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  isbn: z.string().min(10, "Description must be at least 10 characters."),
  image: z
    .any()
    .optional()
    .refine(
      (fileList) =>
        !fileList || fileList.length === 0 || fileList?.[0] instanceof File,
      "Invalid file upload.",
    )
    .refine(
      (fileList) =>
        !fileList ||
        fileList.length === 0 ||
        fileList?.[0]?.type?.startsWith("image/"),
      "Book cover must be an image file.",
    ),
});

export type CreateProductFormValues = z.infer<typeof createProductSchema>;

export interface Product {
  id: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  category: string;
  features: string;
  ISBN?: string;
}
