import "./App.css";
import Logo from "./components/Logo";
import GithubCard from "./components/GithubCard";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

function App() {
  return (
    <div
      style={{
        paddingTop: "1rem",
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
      <Projects/>
      <GithubCard username="jtorresuci" />
    </div>
  );
}

export default App;
