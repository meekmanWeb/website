"use client";

import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/features/firebase/products/productsAPI";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import DeleteProductModal from "./DeleteModal";
import { Product } from "../types/schema";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      setLoading(true);

      await deleteProduct(product.id);

      toast.success("Product deleted successfully");

      setShowDeleteModal(false);
    } catch (error) {
      toast.error("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <tr className="border-t border-slate-200 align-center">
        <td className="px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-slate-200">
              <Image
                src={product.image ?? "/images/logoComp.jpg"}
                alt={product.title}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>

            <p className="font-medium text-slate-900">{product.title}</p>
          </div>
        </td>

        <td className="px-4 py-3 text-slate-700 max-w-md">
          {product.description}
        </td>
        <td className="px-4 py-3 text-slate-700 max-w-md">
          {product.createdAt}
        </td>
        <td className="px-4 py-3 text-slate-700 max-w-md">
          {product.ISBN ?? ""}
        </td>

        <td className="px-4 py-3">
          <div className="flex items-center gap-2">
            <Link href={`/admin/products/${product.id}`}>
              <Eye className="h-4 w-4" />
            </Link>

            <Button
              size="sm"
              variant="destructive"
              type="button"
              onClick={() => setShowDeleteModal(true)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </td>
      </tr>

      <DeleteProductModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        productTitle={product.title}
        loading={loading}
      />
    </>
  );
};

export default ProductCard;
