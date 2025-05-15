import "./App.css";
import Top from "./components/header/header";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <>
      <Top id="top" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer id="footer" />
    </>
  );
}

export default App;
