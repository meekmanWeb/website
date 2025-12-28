import { ProductsType } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductComp = ({ item }: { item: ProductsType }) => {
  const { image, title, description, id } = item;
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex overflow-hidden hover:shadow-lg transition">
      <div className="relative w-[300px] h-56">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="size-full"
        />
      </div>
      <div className="p-6 w-full">
        <h3 className="md:text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-blue-950 text-sm">{description}</p>
        <Link
          href={`products/${id}`}
          className="flex items-center gap-1 text-secondary hover:underline text-sm mt-2"
        >
          View details <ChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default ProductComp;
