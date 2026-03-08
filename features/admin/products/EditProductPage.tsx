"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  getProductById,
  updateProduct,
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
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EditProductPage = () => {
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [imagePathFromCloudinary, setImage] = useState("");
  const [features, setFeatures] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : (params.id as string);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateProductFormValues>({
    resolver: zodResolver(createProductSchema),
  });

  /* ---------------- FETCH PRODUCT ---------------- */

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product: Product = await getProductById(id as string);

        setValue("title", product.title);
        setValue("classes", product.classes);
        setValue("categories", product.category);
        setValue("description", product.description);
        setValue("isbn", product.ISBN);

        setImage(product.image ?? "/images/logoComp.jpg");
        setFeatures(product.features || "");

        setLoading(false);
      } catch {
        setSubmitError("Failed to load product.");
      }
    };

    fetchProduct();
  }, [id, setValue]);

  /* ---------------- UPDATE PRODUCT ---------------- */

  const onSubmit = async (data: CreateProductFormValues) => {
    setSubmitSuccess("");
    setSubmitError("");

    const payload = {
      title: data.title.trim(),
      classes: data.classes.trim(),
      category: data.categories,
      description: data.description.trim(),
      image: imagePathFromCloudinary,
      features: features,
      ISBN: data.isbn,
    };

    try {
      await updateProduct(id, payload);
      setSubmitSuccess("Product updated successfully.");
      toast.success("Product updated successfully.");
      router.push("/admin/products");
    } catch {
      setSubmitError("Unable to update product.");
      toast.error("Unable to update product.");
    }
  };

  if (loading) return <p className="p-6">Loading product...</p>;

  return (
    <section className="mx-auto w-full max-w-3xl rounded-xl p-6">
      <Link
        href="/admin/products"
        className="text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft />
      </Link>

      <div className="my-6">
        <h1 className="text-2xl font-bold text-slate-900">Edit Product</h1>
        <p className="text-sm text-slate-600">
          Update the details of this book product.
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
        {/* CATEGORY */}

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-800">
            Category
          </label>

          <select
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-primary"
            {...register("categories")}
          >
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* DESCRIPTION */}

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-800">
            Description
          </label>

          <textarea
            rows={5}
            className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-primary"
            {...register("description")}
          />
        </div>

        {/* FEATURES EDITOR */}

        <Tiptap setFeatures={setFeatures} features={features} />

        {/* IMAGE */}

        <ProductImageField
          setImage={setImage}
          initialImage={imagePathFromCloudinary}
        />

        {/* SUBMIT */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white disabled:opacity-70"
        >
          {isSubmitting ? "Updating product..." : "Update Product"}
        </button>

        {submitSuccess && (
          <p className="text-sm text-green-700">{submitSuccess}</p>
        )}

        {submitError && <p className="text-sm text-red-600">{submitError}</p>}
      </form>
    </section>
  );
};

export default EditProductPage;
