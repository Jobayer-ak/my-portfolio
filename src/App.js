import logo from './logo.svg';
import './App.css';
import { Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About"
import ResumeDetail from './Pages/ResumeDetail/ResumeDetail';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className='container mx-auto'>
      <Home></Home>
      <About></About>
      <ResumeDetail></ResumeDetail>
      <Services></Services>
    </div>
  );
}

export default App;
