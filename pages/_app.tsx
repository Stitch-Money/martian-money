import '../styles/global.css'
import React from "react"

export default function App({Component, pageProps }: { Component: React.FC, pageProps: any }) {
  return <Component {...pageProps} />
}
