"use client";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/features/firebase/products/productsAPI";
import { Loader2, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Product } from "./types/schema";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data as Product[]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Products</h1>
          <p className="text-sm text-slate-600">
            Manage all products in one place.
          </p>
        </div>
        <Button asChild>
          <Link
            href="/admin/products/create"
            className="group inline-flex items-center text-white"
          >
            <Plus className="h-4 w-4 shrink-0" />
            <span className="ml-2 hidden sm:inline">Create New Product</span>
          </Link>
        </Button>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left text-slate-700">
              <th className="px-4 py-3 font-semibold">Product</th>
              <th className="px-4 py-3 font-semibold">Description</th>
              <th className="px-4 py-3 font-semibold">Date Added</th>
              <th className="px-4 py-3 font-semibold">ISBN</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="py-10 text-center">
                  <div className="flex justify-center items-center gap-2 text-slate-500">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading products...
                  </div>
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-10 text-center text-slate-500">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductPage;
