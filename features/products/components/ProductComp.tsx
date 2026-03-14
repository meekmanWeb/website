import { Product } from "@/features/admin/products/types/schema";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductComp = ({ item }: { item: Product }) => {
  const { image, title, description, id } = item;
  return (
    <div className="sm:p-4 bg-white shadow-md rounded-lg sm:flex overflow-hidden hover:shadow-lg transition">
      <div className="relative sm:w-[300px] ">
        <Image
          src={image ?? "/images/logoComp.jpg"}
          alt={title}
          width={200}
          height={200}
          className="w-full aspect-auto"
        />
      </div>
      <div className="p-6 w-full">
        <h3 className="md:text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-blue-950 text-sm">
          {description?.split(" ").slice(0, 30).join(" ") +
            (description?.split(" ").length > 30 ? "..." : "")}
        </p>
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
