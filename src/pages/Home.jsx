import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Academics from "../components/Academics";
import Gallery from "../components/Gallery";
import News from "../components/News";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "90px" }}>

        <Hero />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            marginTop: "30px",
          }}
        >
          <About />
          <Academics />
          <Gallery />
          <News />
        </div>

        <div style={{ marginTop: "30px" }}>
          <Footer />
        </div>

      </main>
    </>
  );
}

export default Home;