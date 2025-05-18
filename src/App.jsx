import "./App.css";
import Top from "./components/header/header";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <>
      <section id="main">
        <Top id="top" />
        <div id="first">
          <div id="intro">
            <h1>Welcome </h1>
            <h4>
              My name is Toma Illcic. <br /> I’m a junior software developer
            </h4>

            <p>
              {" "}
              I am based in Varaždin, Croatia, passionate about creating
              responsive web applications in React and building practical tools
              with Python.
            </p>
          </div>
        </div>
        <div id="second"></div>
      </section>
      <section>
        <Projects id="projects" />
      </section>
      <section>
        <Contact id="contact" />
      </section>
      c
    </>
  );
}

export default App;
