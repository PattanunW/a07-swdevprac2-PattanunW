import Image from "next/image";
import React from "react";

const TopMenu: React.FC = () => {
  return (<nav
    style={{
      display: "flex",
      justifyContent: "flex-end",  
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "white",
    }}
 >
    <div style={{ display: "flex", gap: "20px" }}>
      <a href="/booking" style={{ color: "white", textDecoration: "none" }}>
        Menu Item Booking
     </a>
      <a href="">
        <img
         src="/img/logo.png" 
          alt="Logo"
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
       />
      </a>
    </div>
  </nav>
  );
};

export default TopMenu;