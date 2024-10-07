import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Parallax type="services" />
      <Services />
      <Parallax type="portfolio" />
    </div>
  );
}

export default App;