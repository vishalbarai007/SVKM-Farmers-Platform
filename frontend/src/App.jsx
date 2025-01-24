import "./App.css";
import Footer from "./Components/Developer/Footer";
import Header from "./Components/Developer/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // <ThemeState>
      <BrowserRouter>

      <Header/>

        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>

      <Footer/>

      </BrowserRouter>
    // </ThemeState>
  )
}

export default App;