import About from "@/components/component/About";
import MissionAndVision from "@/components/component/MissionAndVision";

const AboutPage = () => {
  return (
    <>
      {/* our vision and mission  */}
      <div className="mt-6">
        <About learnMoreBtn={false} />
      </div>
      <MissionAndVision />
      <div className="  max-w-4xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-8 ">
        <article className="my-10 space-y-8 text-center">
          <article className="mt-10 space-y-8">
            <h2 className="text-2xl text-center mb-8 text-primary font-bold">
              A Legacy of Excellence: THE MEEKMAN STORY
            </h2>

            <Section title="Founded in Vision, Built on Excellence">
              In 2014, a visionary group of entrepreneurs recognized a critical
              need for high-quality educational materials in Nigeria’s rapidly
              evolving academic landscape. Driven by a passion for learning and
              a commitment to educational excellence, they established{" "}
              <strong>Meekman Book and Educational Services</strong>, officially
              incorporated by the Corporate Affairs Commission (CAC) of Nigeria.
            </Section>

            <Section title="Early Years: Laying the Foundation">
              Starting from humble beginnings, Meekman set out to transform the
              educational publishing industry. With a sharp focus on producing
              high-quality textbooks for students from nursery through secondary
              school, the company quickly distinguished itself. Driven by a team
              of seasoned educators and publishing professionals, Meekman
              developed a diverse range of engaging and curriculum-aligned
              textbooks, earning the trust of teachers, parents, and students
              alike.
            </Section>

            <Section title="Growth and Expansion">
              Over the years, Meekman has experienced remarkable growth and
              widespread adoption of its educational materials. Today, its books
              are used in classrooms across Nigeria and are celebrated for their
              clarity, accuracy, and curriculum relevance. This rapid expansion
              is a testament to Meekman’s unwavering commitment to quality and
              its growing reputation as a leader in educational publishing.
            </Section>

            <Section title="Innovation at the Core">
              What truly sets Meekman apart is its innovative approach. Every
              publication is crafted with the learner in mind — blending
              colorful illustrations, interactive exercises, and
              thought-provoking content that both inform and inspire. Meekman’s
              team of expert authors, editors, and designers work
              collaboratively to create materials that not only support academic
              achievement but also ignite a lifelong love of learning.
            </Section>

            <Section title="Impact on Education">
              Meekman has had a profound impact on education in Nigeria. By
              consistently raising the bar for quality in educational
              publishing, the company has empowered countless learners to reach
              their full academic potential. Its contributions have strengthened
              the nation’s educational landscape and continue to shape the
              future of learning.
            </Section>
          </article>
        </article>
      </div>
    </>
  );
};

export default AboutPage;

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="text-left">
    <h3 className="text-xl text-orange-500 font-bold">{title}</h3>
    <p className="mt-2 text-gray-700">{children}</p>
  </div>
);
