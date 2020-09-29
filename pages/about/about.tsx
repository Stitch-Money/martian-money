import React from "react"
import { siteName } from "../../components/layout"

export default function About() {
  return (
    <section>
      <div className="container">
        <h1 className="title">New Horizons</h1>
        <p className="content">Olympus Mons is calling, and the great migrations has begun.
          It's time to leave behind our earthly possessions and launch ourselves at new horizons!
          The team at <strong>{ siteName }</strong> will help you transfer all your wealth to your new home on Mars, <strong>the mightiest of the planets!</strong>
        </p>
      </div>
    </section>
  );
}