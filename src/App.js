import "./App.css";
import Logo from "./components/Logo";
import GithubCard from "./components/GithubCard";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Links from "./components/Links";
import SoundToggle from "./components/Sound";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import AuroraTrail from "./components/AuroraTrail";

function App() {
  return (
    <Router>
      <AuroraTrail />
      <GoogleAnalytics trackingId={process.env.GOOGLE_ANALYTICS_ID} />

      <SoundToggle soundFilePath="./audio.mp3" />
      <Logo />
      <Banner
        name="Jose Torres"
        title="Fullstack Software Developer"
        githubLink={"https://github.com/jtorresuci"}
        linkedinLink="https://www.linkedin.com/in/jtorresuci/"
        resumeLink={
          "https://drive.google.com/file/d/1Is_ydezCvZHlRUshs3hYGJjezAQEY8ZY/preview"
        }
      />
      {/* <Projects/> */}
      {/* <GithubCard username="jtorresuci" /> */}
      <Links />
      <Routes>
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/" element={<GithubCard username="jtorresuci" />} />
      </Routes>
      <Footer
        githubLink={"https://github.com/jtorresuci"}
        linkedinLink="https://www.linkedin.com/in/jtorresuci/"
        resumeLink={
          "https://drive.google.com/file/d/1Is_ydezCvZHlRUshs3hYGJjezAQEY8ZY/preview"
        }
      />
    </Router>
  );
}

export default App;
