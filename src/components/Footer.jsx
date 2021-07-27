import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="navbar-brand" to="/Snippets">
          Snippets
        </Link>
      </div>
      <div>
        <Link className="navbar-brand" to="/Requests">
          Requests
        </Link>
      </div>
      <div>
        <Link className="navbar-brand" to="/Settings">
          Settings
        </Link>
      </div>
    </div>
  );
}

export default Footer;
