import Image from "next/image";
import image1 from "@/images/about.jpeg";
import LearnMoreButton from "../button/LearnMoreButton";
import { services } from "../data";

const Services = () => {
  return (
    <article className="bg-gray-300  py-[100px] mt-25">
      <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 w-full mx-auto max-w-6xl px-4 ">
        {/* Image Block */}
        <div className="w-full md:w-1/2">
          <Image
            src={image1}
            alt="About Meekman"
            width={500}
            height={500}
            className="mx-auto rounded-lg object-cover"
          />
        </div>

        {/* Text Block */}
        <div className="w-full md:w-1/2 text-black space-y-6">
          <h2 className="text-center md:text-left text-[32px] leading-12 text-green-900 font-bold">
            Our Services
          </h2>

          <p className="text-lg px-2 md:px-0">
            Meekman is a leading <b>Book Publishing Company</b>, dedicated to
            delivering <b>innovative solutions</b> that meet the evolving needs
            of schools, teachers, pupils and the society at large. With a strong
            commitment to excellence, we specialize in providing services
            designed to enhance performance, drive efficiency, and create value.
            <br />
            <br />
            Our team of experts brings years of experience and a passion for
            innovation to every project, ensuring that we remain at the
            forefront of industry trends.
            <br />
            <br />
            <b>At Meekman,</b> customer satisfaction is our top priority, and we
            pride ourselves on building long-lasting relationships through
            trust, reliability, and outstanding service.
          </p>

          <div className="text-center md:text-left">
            <LearnMoreButton />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mt-20 w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-start bg-white p-6 rounded-md shadow-sm hover:shadow-md transition"
            >
              <Icon className="text-green-800 w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-green-900">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default Services;
