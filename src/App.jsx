import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ShipmentBooking from "./pages/ShipmentBooking";
import ShipmentTracking from "./pages/ShipmentTracking";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<ShipmentBooking />} />
        <Route path="/tracking" element={<ShipmentTracking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
