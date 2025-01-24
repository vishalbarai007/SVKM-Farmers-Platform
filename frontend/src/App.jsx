import "./App.css";
// import { SignupFormDemo } from "./Components/Aceternity/Main/SignupForm";
import Footer from "./Components/Developer/Footer";
import Header from "./Components/Developer/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import CropForm from "./Components/Developer/Cropdetails";
// import th from "./Contexts/theme/ThemeContext";
import ThemeState from "./Contexts/theme/ThemeState";
import GovernmentSchemes from "./Pages/GovernmentSchemes";
// import Dashboard from "./Components/Developer/Dashboard";
import Pricing from "./Pages/Pricing";
import NoOrder from "./Pages/NoOrder";
import OrderConfirm from "./Pages/OrderConfirm";
// import Dashboard from "./Pages/Dashboard";
import DashboardMain from './Components/Developer/DashboardOptions'
import UserState from "./Contexts/user/UserState";
const App = () => {
  return (
    // <ThemeState>
    <UserState>
      <ThemeState>
      <BrowserRouter>

        {/* <Navbar/> */}

        {/* <Header/> */}

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardMain />} />
          <Route path="/add-crop" element={<CropForm/>} />
          <Route path="/government-schemes" element={<GovernmentSchemes/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/no-order" element={<NoOrder/>} />
          <Route path="/order-confirm" element={<OrderConfirm/>} />
          

        </Routes>

        {/* <Footer/> */}

      </BrowserRouter>
    </ThemeState>
    </UserState>
  )
}

export default App;