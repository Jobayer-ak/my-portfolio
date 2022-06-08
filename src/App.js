import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
