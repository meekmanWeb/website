"use client";

const seminars = [
  {
    title: "Modern Teaching Techniques",
    date: "April 12, 2026",
    location: "Lagos Education Centre",
    description:
      "Learn innovative classroom teaching methods designed to improve student engagement and academic performance.",
  },
  {
    title: "Effective School Administration",
    date: "May 3, 2026",
    location: "Abuja Training Hall",
    description:
      "Training for school administrators on management strategies and effective leadership.",
  },
  {
    title: "Using Educational Books for Better Learning",
    date: "June 15, 2026",
    location: "Ibadan Conference Hall",
    description:
      "A seminar for teachers on how to maximize the impact of textbooks in the classroom.",
  },
];

export default function SeminarPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Teacher Training Seminars & Workshops
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          We organize professional development seminars for teachers and school
          administrators to improve teaching methods and academic outcomes.
        </p>

        <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
          Register for Seminar
        </button>
      </section>

      {/* UPCOMING SEMINARS */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Previous Seminars
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {seminars.map((seminar, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl text-primary font-bold mb-2">
                {seminar.title}
              </h3>

              <p className="text-gray-500 text-sm mb-2">📅 {seminar.date}</p>

              <p className="text-gray-500 text-sm mb-4">
                📍 {seminar.location}
              </p>

              <p className="text-gray-600 text-sm mb-6">
                {seminar.description}
              </p>

              <button className="bg-secondary text-white px-4 py-2 rounded-md">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-primary">
            Why Attend Our Seminars?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">
                Improve Teaching Skills
              </h4>
              <p className="text-gray-600">
                Learn modern classroom strategies and teaching methods.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Curriculum Support</h4>
              <p className="text-gray-600">
                Discover how to effectively use our textbooks and learning
                materials.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Networking</h4>
              <p className="text-gray-600">
                Connect with other teachers and education professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Join Our Next Seminar</h2>

        <p className="mb-6">
          Empower your teachers with modern teaching skills.
        </p>

        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
          Register Now
        </button>
      </section>
    </div>
  );
}
