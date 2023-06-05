import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <nav className="navbar">
        <a href="/" className="brand_name">
          Hyadez
        </a>
        <button
          className="brand_logo"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "nav_menu expanded" : "nav_menu"}>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
