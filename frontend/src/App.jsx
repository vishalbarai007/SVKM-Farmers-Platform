import "./App.css";
// import { SignupFormDemo } from "./Components/Aceternity/Main/SignupForm";
// import Footer from "./Components/Developer/Footer";
// import Header from "./Components/Developer/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

const App = () => {
  return (
    // <ThemeState>
      <BrowserRouter>

      {/* <Header/> */}

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />


        </Routes>

      {/* <Footer/> */}

      </BrowserRouter>
    // </ThemeState>
  )
}

export default App;