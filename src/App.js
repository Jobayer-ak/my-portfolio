import logo from './logo.svg';
import './App.css';
import { Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About"

function App() {
  return (
    <div>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
