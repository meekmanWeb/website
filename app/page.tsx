import Hero from "@/components/component/Hero";
import About from "@/components/component/About";
import Services from "@/components/component/Services";
import Contact from "@/components/component/Contact";
import ProductsPage from "@/components/component/Products";
import Tips from "@/components/component/Tips";
import Link from "next/link";
import PreviousSeminar from "@/components/component/PreviousSeminar";

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
      <PreviousSeminar />
      {/* our services section */}

      <Contact />
      {/* Call to Action */}
      <div className="max-w-6xl mx-auto my-10 text-center">
        <h4 className="text-2xl font-bold text-blue-700 mb-2">
          Ready to order books or enroll in an upcoming workshop?
        </h4>
        <Link
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
