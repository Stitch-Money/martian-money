import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Layout from 'components/layout';
import { retrieveTokenUsingAuthorizationCode } from 'integrations/stitch/fetch-token';

export default function Index() {
    const router = useRouter();
    const { code, scope, state, session_state } = router.query;
    let verifier;
    if (typeof window !== 'undefined') {
        verifier = localStorage.getItem('stitchVerifier');
    }
    if (verifier) {
        const { data, error } = useSWR([code, verifier], retrieveTokenUsingAuthorizationCode);

        if (data) {
            return (
                <Layout>
                    <p>{JSON.stringify(data)}</p>
                </Layout>
            );
        } else if (error) {
            return (
                <Layout>
                    {JSON.stringify(error)}
                </Layout>
            );
        }
    }
    return (
        <Layout>
            <p> {code} </p>
            <p> {scope} </p>
            <p> {state} </p>
            <p> {session_state} </p>
        </Layout>
    );
}
