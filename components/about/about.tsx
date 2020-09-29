import React from "react"
import { siteName } from "../layout"

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3">Don't get left behind</h2>
        <p className="content">Olympus Mons is calling, and the great migration has begun.
          It's time to leave behind our earthly possessions and launch ourselves at new horizons!
          The team at <strong>{ siteName }</strong> will help you transfer all your wealth to your new home on Mars, <strong>the mightiest of the planets!</strong>
        </p>
      </div>
    </section>
  );
}