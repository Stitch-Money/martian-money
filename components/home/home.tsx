import React from "react"
import { siteName } from "../layout"

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">
            { siteName }
          </h1>
          <h2 className="subtitle">
            Providing the financial services you'll need for your new Martian life!
          </h2>

          <a className="button is-large is-primary">Apply now</a>
        </div>
      </div>
    </section>
  );
}