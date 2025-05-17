import "./App.css";
import Top from "./components/header/header";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <>
      <Top id="top" />
      <div id="main">
        <div id="first">
          <div id="intro">
            Welcome! My name is Toma Illcic. I’m a junior software developer
            based in Varaždin, Croatia, passionate about creating responsive web
            applications in React and building practical tools with Python.
          </div>
          <Projects id="projects" />
        </div>
        <div id="second">
          <Contact id="contact" />
          <Footer id="footer" />
        </div>
      </div>
    </>
  );
}

export default App;
