import React from "react"
import Head from "next/head"
import Navbar from "./navbar/navbar"
import Footer from "./Footer/footer"

export const siteName = "Martian Money";

export default function Layout({ children }: { children: any }) {
  return (
    <body>
      <Head>
        <title>{ siteName }</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="description" content="Providing the financial services you'll need for your new Martian life!" />
        <meta name="og:title" content={siteName} />
      </Head>

      <Navbar />

      <main className="main-container container">{ children }</main>

      <Footer />

    </body>
  )
}
