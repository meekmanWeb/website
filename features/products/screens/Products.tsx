"use client";
import Image from "next/image";
import ProductComp from "../components/ProductComp";
import { useEffect, useMemo, useState } from "react";
import { getProducts } from "@/features/firebase/products/productsAPI";
import { Product } from "@/features/admin/products/types/schema";

const Products = () => {
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
  const primarySeries = useMemo(() => {
    if (!products) return [];
    else {
      return products.filter((ppro) => ppro.category === "primary");
    }
  }, [products]);
  const secondarySeries = useMemo(() => {
    if (!products) return [];
    else {
      return products.filter((ppro) => ppro.category === "secondary");
    }
  }, [products]);
  const nurserySeries = useMemo(() => {
    if (!products) return [];
    else {
      return products.filter((ppro) => ppro.category === "nursery");
    }
  }, [products]);

  return (
    <main>
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[90vh]">
        <Image
          src="/images/product-hero.png"
          alt="Meekman Library"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="my-10">
        <h2></h2>
        <p className="max-w-lg px-6" data-aos="fade-up" data-aos-delay="200">
          Meekman prides in quality books and educational materials that spreads
          across diverse fields and levels of education ranging from pre school,
          nursery, primary, secondary and the tertiary institution.
        </p>
      </div>
      <section className="my-6">
        <h2 className="px-6 text-xl md:text-2xl text-primary font-bold">
          Nursery Series
        </h2>
        <div className="lg:grid mt-6 space-y-6 lg:space-y-0 grid-cols-2 gap-6 px-4 ">
          {nurserySeries.map((product, index) => (
            <ProductComp item={product} key={index} />
          ))}
        </div>
      </section>
      <section className="my-10">
        <h2 className="px-6 text-xl md:text-2xl text-primary font-bold">
          Primary Series
        </h2>
        <div className="lg:grid mt-6 space-y-6 lg:space-y-0 grid-cols-2 gap-6 px-4 ">
          {primarySeries.map((product, index) => (
            <ProductComp item={product} key={index} />
          ))}
        </div>
      </section>
      <section className="my-10">
        <h2 className="px-6 text-xl md:text-2xl text-primary font-bold">
          Secondary Series
        </h2>
        <div className="lg:grid mt-6 space-y-6 lg:space-y-0 grid-cols-2 gap-6 px-4 ">
          {secondarySeries.map((product, index) => (
            <ProductComp item={product} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
