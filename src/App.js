import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About_page from "./About_page/About_page";
import Contact_page from "./Pages/Contact_page/Contact_page";
import Navbar from "./Pages/Shared/Navbar";
import { HashLink } from "react-router-hash-link";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
