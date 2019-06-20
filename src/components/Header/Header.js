import React from "react";

function Header() {
    return (
      <header style={headerStyle}>
        <p>Score: 0</p>
        <p>Wins: 0</p>
        <p>Loss: 0</p>
      </header>
    );
}

const headerStyle = {
  float: "right",
  display: "inline",
  background: "#FDDF64",
  color: "#581845",

  p: {
    display: "inline"
  }
}

export default Header;
