import "./App.css";
// import { SignupFormDemo } from "./Components/Aceternity/Main/SignupForm";
import Footer from "./Components/Developer/Footer";
// import Header from "./Components/Developer/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Developer/Header";
import ThemeState from "./Contexts/theme/ThemeState";

const App = () => {
  return (
    // <ThemeState>
      <ThemeState>
        <BrowserRouter>

      {/* <Header/> */}

{/* <Header/> */}

  <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />


  </Routes>

{/* <Footer/> */}

</BrowserRouter>
    </ThemeState>
  )
}

export default App;