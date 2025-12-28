import { products } from "@/components/data";
import Image from "next/image";
import ProductComp from "../components/ProductComp";
import { useMemo } from "react";

const Products = () => {
  const primarySeries = useMemo(() => {
    return products.filter((pr) => pr.categories === "primary");
  }, [products]);
  const nurserySeries = useMemo(() => {
    return products.filter((pr) => pr.categories === "nursery");
  }, [products]);
  const secondarySeries = useMemo(() => {
    return products.filter((pr) => pr.categories === "secondary");
  }, [products]);
  return (
    <main>
      <Image
        src="/images/first_class.png"
        width={300}
        height={300}
        alt=""
        className="w-full h-[600px] bg-cover contain-content"
      />
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
      {/* <section className="my-10">
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {nurserySeries.map((product, index) => (
            <ProductCard item={product} key={index} />
          ))}
        </div>
      </section> */}
    </main>
  );
};

export default Products;
