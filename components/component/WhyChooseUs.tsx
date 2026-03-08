import { whyChooseus } from "../data";

const WhyChooseUs = () => {
  return (
    <section className="my-10 max-w-6xl mx-auto px-4 md:px-6">
      <h2
        className="text-center text-secondary/50 font-bold text-lg md:text-xl"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Why Choose Us
      </h2>
      <p
        data-aos="fade-up"
        className="text-xl mt-2 md:text-2xl text-primary max-w-md mx-auto font-bold text-center"
      >
        We Make High Quality Educational Books and Instructional Materials
      </p>
      <p
        data-aos="fade-down"
        data-aos-delay="300"
        className="text-sm my-6 text-center md:text-base max-w-lg mx-auto"
      >
        For over a decade, we have nurtured young minds by delivering high
        quality educational books and meaningful learning experiences.
      </p>

      <article
        data-aos="zoom-in"
        className="mt-8 mb-20 md:flex space-y-4 md:space-y-0 justify-between max-w-4xl mx-auto gap-6"
      >
        {whyChooseus.map(({ icon, rate, title }, index) => {
          return (
            <div
              className="py-2 text-center"
              key={index}
              data-aos={index % 2 == 0 ? "fade-down" : "zoom-in-up"}
              data-aos-delay={index % 2 == 0 ? "300" : "100"}
            >
              <div className="text-3xl size-20 rounded-full bg-secondary/30 flex justify-center items-center mx-auto mb-2 text-primary">
                {icon}
              </div>
              <h3 className="text-primary font-semibold mt-3 text-lg md:text-xl ">
                {title}
              </h3>
              <p className="mt-4  text-2xl md:text-3xl text-primary font-bold">
                {rate}%
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default WhyChooseUs;
