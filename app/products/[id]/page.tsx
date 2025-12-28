"use client";
import ProductDetails from "@/features/products/screens/ProductDetails";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { id } = useParams();
  const productId = Array.isArray(id) ? id[0] : id || "";
  return <ProductDetails id={productId} />;
};

export default ProductDetail;
