import Image from "next/image";

const SeminarPage = () => {
  return (
    <section>
      <div className="w-full h-[70vh]">
        <Image
          src="/images/sem1.jpg"
          alt="sem1"
          width={300}
          height={400}
          className="w-full h-full object-center"
        />
      </div>
      <article className="max-w-6xl mx-auto px-4 md:px-6 my-10">
        <p className="mt-5 max-w-md">
          Meekman has organized a wide varieties of seminars and workshops. Most
          recent of all are listed below
        </p>
      </article>
    </section>
  );
};

export default SeminarPage;
