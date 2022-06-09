import logo from './logo.svg';
import './App.css';
import { Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About"
import Education from './Pages/Education/Education';

function App() {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Education></Education>
    </div>
  );
}

export default App;
