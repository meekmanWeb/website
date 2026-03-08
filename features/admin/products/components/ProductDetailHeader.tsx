"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductDetailHeader = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <Button asChild variant="outline" size="sm">
        <Link href="/admin/products">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <div className="flex items-center gap-2">
        <Button asChild size="sm" variant="secondary">
          <Link href={`/admin/products/${id}/edit`}>
            <Pencil className="mr-1 h-4 w-4" />
            Edit
          </Link>
        </Button>
        <Button size="sm" variant="destructive" type="button">
          <Trash2 className="mr-1 h-4 w-4" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailHeader;
