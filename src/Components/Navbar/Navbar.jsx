import React from "react";
import './navbar.css'; // Ensure this path is correct based on your project structure
// import './Navbar.css'; // Only keep this if you have custom styles that don't conflict with Bootstrap

export default function Navbar() {
  return (
    <>
    <div className="container1">
      <div className="logo">
        <img className="logo1" src="src\assets\images\Center.png" alt="Center image" />
        <img className="mbl-logo1" src="src\assets\images\Containermbl.svg" alt="mbl navbar" />
        
      </div>
      <div className="navimg2">
        <img className="img3" src="src\assets\images\img3.png" alt="Logo image" />
      </div>
    </div>
    <br />
    
  

    
    </>
  );
}