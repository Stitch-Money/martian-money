import React from "react"
import { siteName } from "../../components/layout"

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            { siteName }
          </h1>
          <h2 className="subtitle">
            Providing the financial services you'll need for your new Martian life!
          </h2>
        </div>
      </div>
    </section>
  );
}