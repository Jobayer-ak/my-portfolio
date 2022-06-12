import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About"
import ResumeDetail from './Pages/ResumeDetail/ResumeDetail';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer';
import About_page from './About_page/About_page';
import Contact_page from './Pages/Contact_page/Contact_page';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About_page></About_page>}></Route>
        <Route path='/contact' element={<Contact_page></Contact_page>}></Route>
      </Routes>
    </div>
  );
}

export default App;
