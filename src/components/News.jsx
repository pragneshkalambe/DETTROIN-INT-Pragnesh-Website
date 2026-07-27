// import React from 'react'

const newsData = [
  {
    date: "15 July 2026",
    title: "Annual Science Exhibition",
    desc: "Students showcased innovative science projects demonstrating creativity and practical learning."
  },
  {
    date: "22 July 2026",
    title: "Inter-School Sports Championship",
    desc: "Our students participated in various sports events, displaying teamwork, discipline and determination."
  },
  {
    date: "30 July 2026",
    title: "Parent-Teacher Interaction",
    desc: "An engaging session to discuss student progress and strengthen collaboration between parents and teachers."
  }
];

const News = () => {
  return (
    <section
      id="news"
      className=" bg-gray-50"
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          paddingLeft: "45px",
          paddingRight: "45px",
        }}
      >
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-red-700 font-semibold">
            Latest News
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Events & Announcements
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Stay updated with the latest activities, achievements and important announcements from our school.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {newsData.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8"
            >

              <span className="text-red-700 font-semibold">
                {item.date}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>

              <button className="mt-8 text-red-700 font-semibold hover:text-red-800">
                Read More →
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default News