// import React, { useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from "reactstrap";

// const CustomNav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div className="custom-nav">
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/" className="mr-auto">
//           Stapi App
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} className="mr-2" />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav navbar>
//             <NavItem>
//               <NavLink href="/logout">Logout</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default CustomNav;



import React from "react";
import { Link } from "react-scroll";

const CustomNav = () => {
  const linkStyle = {
    fontWeight: "bold",
    color: "#f3f3f3",
    textDecoration: "none",
    padding: "0.75rem 1rem",
    borderRadius: "5px",
    transition: "background-color 0.3s",
    cursor: "pointer"
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "#008000",
  };

  return (
    <nav style={{ backgroundColor: "#d3f0e9", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: "1rem 2rem", borderBottom: "2px solid black", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundImage: `url('https://wallpapercrafter.com/sizes/2048x1152/16620-flowers-leaves-plant-dark-green-4k.jpg')`, position:"fixed", width:"100%" }}>
      <h1 style={{ color: "#f3f3f3", fontSize: "1.5rem" }}>Plant Disease Doctor</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="home" smooth={true} duration={500} style={linkStyle} activeClass="active">Home</Link>
        <Link to="upload" smooth={true} duration={500} style={linkStyle} activeClass="active">How it works</Link>
        <Link to="why" smooth={true} duration={500} style={linkStyle} activeClass="active">Why choose us?</Link>
        <Link to="footer" smooth={true} duration={500} style={linkStyle} activeClass="active">Contact</Link>
      </div>
    </nav>
  );
}

export default CustomNav;