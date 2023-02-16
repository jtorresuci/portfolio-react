import logo from './logo.svg';
import './App.css';
import { Container, Navbar } from 'react-bootstrap';

import CustomNavbar from './components/CustomNavbar';
// import NameTrail from './components/Name';
import Logo from './components/Logo';
import GithubCard from './components/GithubCard';
// import Word from './components/ sWord';
// require('dotenv').config()


function App() {
  return (
    <div  style={{
      backgroundColor: '#111111', 
    }}> 
    <CustomNavbar/>
    <Logo imageUrl="/banner.png" altText="My logo"/>
    <GithubCard username="jtorresuci" />
    </div>
  );
}

export default App;
