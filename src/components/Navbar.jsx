import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

// In Navbar.jsx, replace the current navbarstyle with:
  const navbarstyle = {
    position: "sticky",
    top: "0",
    zIndex: "1000"
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav style={navbarstyle} >
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/booking">Shipment Booking</Link>
      <Link to="/tracking">Shipment Tracking</Link>
      <Link to="/contact">Contact Us</Link>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="logout-button">Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
