import React from "react";
import { Link, withRouter } from "react-router-dom";
import { BDLogoSVG, SettingsSVG, SnippetsSVG } from "./svgs"

function Navigation(props) {
  return (
    <div className="navigation">
      <Link className="navbar-brand" to="/">
        Doggybootsy
      </Link>
      <div>
         <div
           className={`nav-item`}
         >
           <a target="_blank" className="nav-link" rel="noopener noreferrer" href="https://betterdiscord.app/developer/Doggybootsy">
              <BDLogoSVG />
           </a>
         </div>
         <div
           className={`nav-item${
             props.location.pathname === "/snippets" ? " active" : ""
           }`}
         >
           <Link className="nav-link" to="/snippets">
              <SnippetsSVG/>
           </Link>
         </div>
         <div
           className={`nav-item${
             props.location.pathname === "/settings" ? " active" : ""
           }`}
         >
           <Link className="nav-link" to="/settings">
              <SettingsSVG/>
           </Link>
         </div>
      </div>
    </div>
  )
}

export default withRouter(Navigation);