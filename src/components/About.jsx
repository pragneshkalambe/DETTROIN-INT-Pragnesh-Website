import aboutImage from "../assets/images/AboutUs.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="text-red-700 font-semibold uppercase tracking-[4px]">
              About Us
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Building Bright Futures Through Quality Education
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Vasant Valley School is committed to nurturing young minds through
              academic excellence, creativity, innovation, and strong values.
              Our experienced faculty and modern infrastructure help students
              develop confidence, leadership, and lifelong learning skills.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              We believe every child is unique. Our goal is to inspire curiosity,
              encourage critical thinking, and prepare students to become
              responsible global citizens.
            </p>

            <div className="mt-10">
              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
                Learn More →
              </button>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <img
              src={aboutImage}
              alt="About Vasant Valley School"
              className="w-full max-w-xl h-[500px] object-cover rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;