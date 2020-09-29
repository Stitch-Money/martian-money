import React from "react"
import { siteName } from "../layout"

export default function Navbar() {
  return (
    <nav id="navbar" className={"navbar has-shadow is-spaced"}>
      <div className="container">
        <img className="navbar-item" src={'/favicon.svg'} width={"60px"}/>
        <h2 className="navbar-item">{ siteName }</h2>
        <a className="navbar-item navbar-end button is-primary">Apply!</a>
      </div>
    </nav>
  );
}