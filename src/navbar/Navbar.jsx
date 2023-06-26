import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div>
            <a href="/" className="brand-group-top">
              <img
                src="/static/images/brand-logo.svg"
                className="brand-group brand-svg"
              ></img>
              <h1 className="brand_name brand-group">Hyadez</h1>
            </a>
          </div>

          <button
            className="nav_circle"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--spicy-color)"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="var(--main-color2)"
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
                <a className="navlinks" href="/account">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
