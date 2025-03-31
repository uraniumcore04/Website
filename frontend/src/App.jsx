import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/hero";
import Footer from "./components/footer";
import About from "./components/About";
import OurWork from "./components/work";
import TeamSection from "./components/teamsection";
import ContactForm from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <OurWork />
      <TeamSection />
      <ContactForm/>
      <Footer />
    </>
  );
}

export default App;
