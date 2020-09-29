import React from "react"
import Head from "next/head"

export default function Layout({ children }: { children: any }) {
  return (
    <body>
      <Head>
        <title>Mars Capital</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Providing the financial services you'll need for your new Martian life!" />
        <meta name="og:title" content={"Mars Capital"} />
      </Head>
      <div className={"navbar"}><h2>Mars Capital</h2></div>
      <main>{children}</main>
      <footer className={"footer"}>
        <div className="content has-text-centered">
          <p>
            <strong>Mars Capital Demo</strong> by <a href="https://stitch.money/">Stitch</a>. The source code is
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>
          </p>
        </div>
      </footer>
    </body>
  )
}
