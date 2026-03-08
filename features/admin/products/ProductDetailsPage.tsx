"use client";

import { Button } from "@/components/ui/button";
import { getProductById } from "@/features/firebase/products/productsAPI";
import { ArrowLeft, Loader2, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Product } from "./types/schema";

const ProductDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const { id }: { id: string } = useParams();
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);
  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <Loader2 className="animate-spin w-20 text-secondary" size={60} />
      </div>
    );
  }
  if (!product) {
    return (
      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-700">Product not found.</p>
      </section>
    );
  }

  return (
    <section className="space-y-5">
      <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <div className="relative w-full overflow-hidden rounded-lg border border-slate-200 aspect-4/5">
            <Image
              src={product.image ?? "/images/logoComp.jpg"}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-slate-900">
              {product.title}
            </h1>
            <p className="text-slate-700">{product.description}</p>

            <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <p>
                <span className="font-semibold text-slate-900">Class:</span>{" "}
                <span className="capitalize">{product.category}</span>
              </p>
              <p>
                <span className="font-semibold text-slate-900">ISBN:</span>{" "}
                <span className="capitalize">{product.ISBN}</span>
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-bold text-primary text-2xl">
                About the Book
              </h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: product.features }}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductDetailsPage;
