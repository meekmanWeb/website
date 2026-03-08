import { Product } from "@/features/firebase/products/productsAPI";
import Image from "next/image";

const ProductCard = ({ item }: { item: Product }) => {
  const { image, title, description } = item;
  return (
    <div className="px-4 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-56">
        <Image
          src={image ?? "/images/logoComp.jpg"}
          alt={title}
          width={200}
          height={200}
          className="size-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
