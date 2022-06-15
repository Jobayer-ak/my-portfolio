import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { HashLink } from "react-router-hash-link";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Footer from "./Pages/Shared/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projectDetails" element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
