import logo from "./logo.svg";
import "./App.css";
import { Container, Navbar } from "react-bootstrap";

import CustomNavbar from "./components/CustomNavbar";
// import NameTrail from './components/Name';
import Logo from "./components/Logo";
import GithubCard from "./components/GithubCard";
import Banner from "./components/Banner";

// import Word from './components/ sWord';
// require('dotenv').config()

function App() {
  return (

      <div

        style={{
          paddingTop: "1rem"
        }}
      >
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
        <GithubCard username="jtorresuci" />
      </div>

  );
}

export default App;
