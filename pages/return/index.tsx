import Layout from "../../components/layout";
import React from "react";
import { useRouter } from 'next/router'


export default function Index() {
  const router = useRouter()
  const { code, scope, state, session_state } = router.query  
  return (
    <Layout>
      <p> { code } </p>
      <p> { scope } </p>
      <p> { state } </p>
      <p> { session_state } </p>
    </Layout>
  )
}
