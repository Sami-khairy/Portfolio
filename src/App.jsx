// src/App.js
import "./index.css"; // Import the Tailwind CSS
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
