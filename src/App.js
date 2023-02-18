import "./App.css";
import Logo from "./components/Logo";
import GithubCard from "./components/GithubCard";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Links from "./components/Links";
import SoundToggle from "./components/Sound";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <SoundToggle soundFilePath="./audio.mp3" />
      <Logo />
      <Banner
        name="Jose Torres"
        title="Fullstack Software Developer"
        githubLink={"https://github.com/jtorresuci"}
        linkedinLink="https://www.linkedin.com/in/jtorresuci/"
        resumeLink={
          "https://drive.google.com/file/d/1JmPwsWDT9LyaozNIpQNriWKNz-IHFjc-/preview"
        }
      />
      {/* <Projects/> */}
      {/* <GithubCard username="jtorresuci" /> */}
      <Links />
      <Routes>
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/" element={<GithubCard username="jtorresuci" />} />
      </Routes>
      <Footer         githubLink={"https://github.com/jtorresuci"}
        linkedinLink="https://www.linkedin.com/in/jtorresuci/"
        resumeLink={
          "https://drive.google.com/file/d/1JmPwsWDT9LyaozNIpQNriWKNz-IHFjc-/preview"
        }/>
    </Router>
  );
}

export default App;
