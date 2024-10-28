// PlusSign.js
import React, { useState } from "react";
import "./PlusSign.css";
import faPlus from "../../assets/plus.png";
import { Link } from "react-router-dom";

function PlusSign() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="navbar-section">
      <button
        className={`plusSign ${
          expanded ? "expanded rotate-icon" : ""
        }`}
        onClick={toggleNavbar}
      >
        <img src={faPlus} className="plus" alt="Plus Icon" />
      </button>
      {expanded && (
        <div className="navbar-links">
          <div>
            <Link to="/about" className="links">
              about
            </Link>
          </div>
          <div>
            <Link to="/photography" className="links">
              photography
            </Link>
          </div>
          <div>
            <Link to="/coding" className="links">
              coding
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlusSign;
