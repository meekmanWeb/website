import Hero from "@/components/component/Hero";
import About from "@/components/component/About";
import Services from "@/components/component/Services";
import ProductsPage from "@/components/component/Products";
import Tips from "@/components/component/Tips";
import WhyChooseUs from "@/components/component/WhyChooseUs";

export default function Home() {
  return (
    <section>
      {/* header section  */}

      {/* hero section  */}
      <Hero />
      <Tips />
      {/* About us section  */}
      <About />
      <Services />
      <ProductsPage />
      <WhyChooseUs />
      {/* <SeminarsWorkshopsSection /> */}
      {/* our services section */}

      {/* <div className="max-w-6xl mx-auto my-10 text-center">
        <h4 className="text-2xl font-bold text-primary mb-2">
          Ready to order books or enroll in an upcoming workshop?
        </h4>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary transition"
        >
          Contact Us
        </Link>
      </div> */}
    </section>
  );
}
