"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  createProduct,
  Product,
} from "@/features/firebase/products/productsAPI";
import ProductImageField from "./components/ProductImageField";
import ProductTextField from "./components/ProductTextField";
import {
  createProductSchema,
  CreateProductFormValues,
  productCategories,
} from "./types/schema";
import Tiptap from "./components/TipTap";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreateProductPage = () => {
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();
  const [imagePathFromCloudinary, setImage] = useState("");
  const [features, setFeatures] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateProductFormValues>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      title: "",
      classes: "",
      categories: "nursery",
      description: "",
    },
  });

  const onSubmit = async (data: CreateProductFormValues) => {
    setSubmitError("");
    if (!imagePathFromCloudinary) {
      toast.error("Please add an image");
      return;
    }

    const payload: Product = {
      title: data.title.trim(),
      classes: data.classes.trim(),
      category: data.categories,
      description: data.description.trim(),
      image: imagePathFromCloudinary,
      features: features,
      ISBN: data.isbn,
    };

    try {
      await createProduct(payload);
      toast.success("Product created successfully.");
      reset({
        title: "",
        classes: "",
        categories: "nursery",
        description: "",
      });
      router.push("/admin/products");
    } catch {
      setSubmitError("Unable to create product. Please try again.");
      toast.error("Unable to create product. Please try again.");
    }
  };

  return (
    <section className="mx-auto w-full max-w-3xl rounded-xl p-6">
      <Link
        href="/admin/products"
        className="text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft />
      </Link>

      <div className="my-6">
        <h1 className="text-2xl font-bold text-slate-900">
          Create New Product
        </h1>
        <p className="text-sm text-slate-600">
          Add a new book product to your catalog.
        </p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <ProductTextField
          id="title"
          label="Book Title"
          placeholder="Enter book title"
          required
          registration={register("title")}
          error={errors.title?.message}
        />

        <ProductTextField
          id="classes"
          label="Classes"
          placeholder="e.g. Nursery 2, Primary 1-3"
          required
          registration={register("classes")}
          error={errors.classes?.message}
        />
        <ProductTextField
          id="isbn"
          label="ISBN"
          placeholder="e.g.978978"
          required
          registration={register("isbn")}
          error={errors.isbn?.message}
        />

        <div className="space-y-1">
          <label
            htmlFor="categories"
            className="block text-sm font-medium text-slate-800"
          >
            Category <span className="text-red-600">*</span>
          </label>
          <select
            id="categories"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-primary"
            {...register("categories")}
          >
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          {errors.categories && (
            <p className="text-sm text-red-600">{errors.categories.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-slate-800"
          >
            Description <span className="text-red-600">*</span>
          </label>
          <textarea
            id="description"
            rows={5}
            placeholder="Write a description of the book features"
            className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-primary"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>
        <Tiptap setFeatures={setFeatures} />

        <ProductImageField setImage={setImage} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Creating product..." : "Create Product"}
        </button>

        {submitError && <p className="text-sm text-red-600">{submitError}</p>}
      </form>
    </section>
  );
};

export default CreateProductPage;
