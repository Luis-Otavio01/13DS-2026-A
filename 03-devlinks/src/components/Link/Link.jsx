import React from "react";
import "./Link.module.css";

const Link = ({ href, children }) => {
  return (
    <a href={href} className="link">
      {children}
    </a>
  );
};

export default Link;
