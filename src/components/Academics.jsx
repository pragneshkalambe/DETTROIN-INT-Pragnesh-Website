import chemistryLab from "../assets/images/chemistrylabpic.jpeg";
import computerLab from "../assets/images/computerlabpic.jpeg";
import smartClass from "../assets/images/laissez_faire_labpic.jpeg";
import quizRoom from "../assets/images/quizlabpic.jpeg";
import assessmentCycle from "../assets/images/reassessmentcycle.png";

const academicData = [
  {
    image: computerLab,
    title: "Computer Laboratory",
    desc: "Equipped with modern computers to develop digital skills and technological confidence.",
  },
  {
    image: chemistryLab,
    title: "Chemistry Laboratory",
    desc: "Hands-on scientific experiments encourage curiosity and practical understanding.",
  },
  {
    image: quizRoom,
    title: "Quiz & Competitions",
    desc: "Interactive activities that strengthen knowledge, confidence and teamwork.",
  },
  {
    image: smartClass,
    title: "Interactive Learning",
    desc: "Modern classrooms designed to create engaging and collaborative learning experiences.",
  },
];

const Academics = () => {
  return (
    <section
      id="academics"
      className="py-20 lg:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-red-700 font-semibold">
            Academics
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Inspiring Excellence Through Education
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our curriculum combines academic excellence with creativity,
            innovation, sports and leadership to prepare students for a
            successful future.
          </p>

        </div>

        {/* Academic Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {academicData.map((item, index) => (

            <div
              key={index}
              className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Assessment Section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[4px] text-red-700 font-semibold">
              Assessment & Reporting
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              A Continuous Learning Cycle
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              We provide comprehensive assessment and reporting that helps
              parents, teachers and students understand academic progress
              beyond traditional grades. Continuous feedback, evaluation and
              improvement ensure every learner reaches their full potential.
            </p>

          </div>

          <div>

            <img
              src={assessmentCycle}
              alt="Assessment Cycle"
              className="w-full rounded-3xl shadow-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Academics;