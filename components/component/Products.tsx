import Image from "next/image";
import { products } from "../data";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

// Sample products array

const ProductsPage = () => {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-24">
      <div className="mb-12 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900  ">
          Our Products
        </h1>
        <p className="max-w-lg">
          Meekman prides in quality books and educational materials that spreads
          across diverse fields and levels of education ranging from pre school,
          nursery, primary, secondary and the tertiary institution
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
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
