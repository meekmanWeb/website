import Image from "next/image";
import LearnMoreButton from "../button/LearnMoreButton";
interface AboutProps {
  learnMoreBtn?: boolean;
}
const About = ({ learnMoreBtn = true }: AboutProps) => {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-10 ">
      <div
        className="w-full md:w-1/2"
        data-aos="flip-right"
        data-aos-delay="100"
      >
        <Image
          src="/images/meekman_about.jpg"
          alt="About Meekman"
          width={500}
          height={500}
          className="mx-auto rounded-md object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 text-black space-y-4">
        <h2
          className="text-center md:text-left text-lg md:text-xl leading-[160%]  text-amber-500 font-bold"
          data-aos="fade-down"
        >
          About Us
        </h2>

        <p
          className="text-[18px] leading-8 px-2 md:px-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <b className="text-xl font-bold text-primary">
            Meekan Books and Educational Services
          </b>{" "}
          is a leading <b>book publishing company</b> dedicated to delivering{" "}
          <b>innovative solutions</b> that meet the evolving needs of the
          society. With a strong commitment to excellence, we specialize in
          providing services designed to enhance performance, drive efficiency,
          and create value.
          <br />
          Our team of experts brings years of experience and a passion for
          innovation to every project, ensuring that we remain at the forefront
          of industry trends.
          <br />
          <b>At Meekman,</b> customer satisfaction is our top priority. We pride
          ourselves on building long-lasting relationships through trust,
          reliability, and outstanding service.
        </p>
        {learnMoreBtn && <LearnMoreButton />}
      </div>
    </section>
  );
};

export default About;
