// import {useState} from 'react';
import computerLab from "../assets/images/computerlabpic.jpeg";
import quizRoom from "../assets/images/gallery1Quiz.jpeg";
import sportsDay from "../assets/images/gallery3Sports.jpeg";
import chemistryLab from "../assets/images/gallery4ChemistryLab.jpeg";
import AIEvent from "../assets/images/gallery2AiEvent.jpeg";
import ITFest from "../assets/images/IT_Fest.jpeg";



let galleryImages = [
  {
    image: sportsDay,
    title: "Sports Day"
  },
  {
    image: computerLab,
    title: "Computer Laboratory"
  },
  {
    image: chemistryLab,
    title: "Chemistry Laboratory"
  },
  {
    image: AIEvent,
    title: "AI Impact Summit"
  },
  {
    image: ITFest,
    title: "Suryodaya IT Fest"
  },
  {
    image: quizRoom,
    title: "Quiz Competition"
  }
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-red-700 font-semibold">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Capturing Learning, Creativity & Memories
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            A glimpse into life at Vasant Valley School through academics,
            activities, innovation and unforgettable moments.
          </p>

        </div>

        {/* Images */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">

          {galleryImages.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">

                <h3 className="text-white text-2xl font-semibold p-6">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="text-center mt-14">

          <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg transition duration-300">
            View Gallery
          </button>

        </div>

      </div>
    </section>
  );
};

export default Gallery