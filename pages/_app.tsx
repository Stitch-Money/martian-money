import '../styles/global.css'
import React from "react"
import 'bulma/css/bulma.min.css';

export default function App({Component, pageProps }: { Component: React.FC, pageProps: any }) {
  return <Component {...pageProps} />
}
