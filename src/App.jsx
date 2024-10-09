import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Parallax type="services" />
      <Services />
      <Parallax type="portfolio" />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
