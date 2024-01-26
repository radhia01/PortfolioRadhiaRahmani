import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Courses />
      <Footer />
    </div>
  );
}
export default App;
