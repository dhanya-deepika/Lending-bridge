import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react"; // Import icons from Lucide React
import Logo from "../../Assets/Rectangle 55.png"; // Import your logo


const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 40px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo Section */}
      <div style={{ paddingLeft: "70px" }}><img src={Logo} alt="Lending Bridge Logo" style={{ width: "161px", height: "32px" }} />
</div>


      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "30px", fontSize: "16px", fontWeight: "500" }}>
        <NavLink to="/products" style={{ textDecoration: "none", color: "#000" }}>
          Our Products
        </NavLink>
        <NavLink to="/works" style={{ textDecoration: "none", color: "#000" }}>
          Our Works
        </NavLink>
        <NavLink to="/team" style={{ textDecoration: "none", color: "#000" }}>
          Team
        </NavLink>
        <NavLink to="/broker" style={{ textDecoration: "none", color: "#000" }}>
          For Broker
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: "none", color: "#000" }}>
          Contact Us
        </NavLink>
      </div>

      {/* Contact Info Section */}
      <div style={{ display: "flex",flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
        {/* Email */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Mail size={20} color="#1E40AF" /> {/* Email Icon */}
          <span style={{ fontSize: "14px", fontWeight: "500" }}>info@lendingbridge.co.uk</span>
        </div>

        {/* Phone */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Phone size={20} color="#1E40AF" /> {/* Phone Icon */}
          <span style={{ fontSize: "14px", fontWeight: "500" }}>020 3725 0589</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
