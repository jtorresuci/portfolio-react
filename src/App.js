import logo from "./logo.svg";
import "./App.css";
import { Container, Navbar } from "react-bootstrap";

import CustomNavbar from "./components/CustomNavbar";
// import NameTrail from './components/Name';
import Logo from "./components/Logo";
import GithubCard from "./components/GithubCard";
import ActivityChart from "./components/Activity";
// import Word from './components/ sWord';
// require('dotenv').config()

function App() {
  return (
    <div
      style={{
        backgroundColor: "#111111",
      }}
    >
      <CustomNavbar />
      <Logo imageUrl="/banner.png" altText="My logo" />
      <Container style={{ display: "flex", justifyContent: "center" }}>
      <ActivityChart username="jtorresuci" />
      </Container>{" "}
      <GithubCard username="jtorresuci" />
    </div>
  );
}

export default App;
