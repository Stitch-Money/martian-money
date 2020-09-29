import Layout from "../components/layout"
import React from "react"
import Home from "./home/home"
import About from "./about/about"

export default function Index() {
  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  )
}
