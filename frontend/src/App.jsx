import "./App.css";
// import { SignupFormDemo } from "./Components/Aceternity/Main/SignupForm";
import Footer from "./Components/Developer/Footer";
import Header from "./Components/Developer/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import CropForm from "./Components/Developer/Cropdetails";
// import th from "./Contexts/theme/ThemeContext";
import ThemeState from "./Contexts/theme/ThemeState";
const App = () => {
  return (
    // <ThemeState>
    <ThemeState>
      <BrowserRouter>

        {/* <Navbar/> */}

        {/* <Header/> */}

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-crop" element={<CropForm/>} />
          

        </Routes>

        {/* <Footer/> */}

      </BrowserRouter>
    </ThemeState>
  )
}

export default App;