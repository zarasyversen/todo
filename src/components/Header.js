import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#33CCCC",
          textTransform: "lowercase",
          textAlign: "center",
          textShadow: "1px 1px 1px #333",
        }}
      >
        todos
      </h1>
    </header>
  );
};

export default Header;
