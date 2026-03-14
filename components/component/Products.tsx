"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/features/admin/products/types/schema";
import { getProducts } from "@/features/firebase/products/productsAPI";
import ProductSkeleton from "./ProductSkeleton";
import toast from "react-hot-toast";

// Sample products array

const ProductsPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        if (data.length < 1) {
          toast.error("No Product Found, please reload");
        }
        setProducts(data as Product[]);
        toast.success("Products fetched successfully");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-24">
      <div className="mb-12 space-y-4">
        <h1
          className="text-3xl md:text-4xl font-bold text-primary  "
          data-aos="fade-down"
        >
          Our Products
        </h1>
        <p className="max-w-lg" data-aos="fade-up" data-aos-delay="200">
          Meekman prides in quality books and educational materials that spreads
          across diverse fields and levels of education ranging from pre school,
          nursery, primary, secondary and the tertiary institution.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : products.map((product, index) => (
              <div
                key={index}
                className="bg-white w-full shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                data-aos={index > 1 ? "fade-up" : "fade-down"}
                data-aos-delay="300"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={product.image ?? "/images/logoComp.jpg"}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {product.description?.split(" ").slice(0, 30).join(" ") +
                      (product.description?.split(" ").length > 30
                        ? "..."
                        : "")}
                  </p>
                </div>
              </div>
            ))}
      </div>
      <div className="flex justify-end mt-6">
        <Button className="cursor-pointer text-white" asChild>
          <Link href="/products" className="flex items-center">
            See more
            <ChevronRight />
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default ProductsPage;
