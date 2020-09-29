import Layout, { siteName } from "../components/layout"
import React from "react"

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <h1 className="title">{ siteName }</h1>
      </div>
    </Layout>
  )
}
