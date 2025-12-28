import { products } from "@/components/data";
import Image from "next/image";
import { useMemo } from "react";

const ProductDetails = ({ id }: { id: string }) => {
  const product = useMemo(() => {
    return products.find((pr) => pr.id === id);
  }, [id]);
  console.log(product);
  return (
    <main>
      <Image
        src={product?.image ?? ""}
        alt={product?.title ?? ""}
        width={300}
        height={300}
        className="w-full h-[400px]"
      />
      <section className="my-10 pt-10 px-6">
        <h2 className="font-semibold text-lg text-primary">{product?.title}</h2>
      </section>
    </main>
  );
};

export default ProductDetails;
