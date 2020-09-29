import Layout from "../components/layout"
import React from "react"
import Home from "../components/home/home"
import About from "../components/about/about"
import Testimonials from "../components/testimonials/testimonials"

export default function Index() {
  return (
    <Layout>
      <Home />
      <About />
      <Testimonials />
    </Layout>
  )
}
