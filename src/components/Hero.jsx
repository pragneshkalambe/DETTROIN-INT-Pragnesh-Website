import hero2 from "../assets/images/HeroImage2_laissez_faire_2026_7-1.jpeg";
import hero3 from "../assets/images/HeroImage3_synapse_2026_4.jpeg";
import hero4 from "../assets/images/HeroImage4_synapse_2026_6.jpeg";
import hero from "../assets/images/HeroImage_laissez_faire_2026_4-1.jpeg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let heroImages = [
    hero, hero2, hero3, hero4
  ];

  useEffect(() => {

    let timer = setInterval(() => {
      setCurrentSlide(prev =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      )
    }, 4000);
    return () => clearInterval(timer);

  }, []);

  return (
    <section
      id="hero"
      className="w-full px-0"
      // style={{ marginBottom: "40px" }}
    >
      <div className="relative w-full h-[75vh] md:h-[85vh] lg:h-screen overflow-hidden rounded-3xl lg:rounded-none">

        {/* Background Image */}

        {/* {heroImages.map((heroimage, index) => (
          <img
            key={index}
            src={heroImages[currentSlide]}
            alt={`Hero ${index + 1}`}
          />
        ))} */}

        <img
          src={heroImages[currentSlide]}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-12 lg:px-16 max-w-2xl text-white">

            <p className="text-2xl md:text-3xl mb-2">
              Welcome to
            </p>

            <h1 className="font-bold leading-tight text-5xl md:text-6xl lg:text-7xl">
              Vasant Valley
              <br />
              School
            </h1>

            <p className="mt-4 text-lg md:text-xl leading-relaxed">
              Inspiring young minds through quality education and innovation.
            </p>

            <button className="mt-8 bg-red-700 hover:bg-red-800 px-6 py-3 rounded-md transition duration-300">
              Explore More
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;