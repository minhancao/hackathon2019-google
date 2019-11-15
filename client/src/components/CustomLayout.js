import React from "react";
import CustomNavbar from "./CustomNavbar";

const CustomLayout = props => {
  return (
    <div className="App">
      <CustomNavbar />
      <div style={{ background: "#fff", padding: 0, minHeight: 280 }}>
        {props.children}
      </div>
    </div>
  );
};

export default CustomLayout;
