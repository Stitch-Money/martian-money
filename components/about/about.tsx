import React from "react"
import { siteName } from "../layout"

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">

          <div className="column">
        <h2 className="title is-3">Apply for your dome loan now!</h2>
        <p className="content is-medium">Olympus Mons is calling, and the great migration has begun.
          It's time to leave behind our earthly possessions and launch ourselves at new horizons.
          <br/>
          <br/>
          The team at <a href={"#"}>{ siteName }</a> will help you transfer all your wealth to your new home on Mars, <strong>the mightiest of the planets!</strong>
        </p>
          </div>
          <img className="column box has-shadow" src="/images/dome.jpg" />
        </div>
      </div>
    </section>
  );
}