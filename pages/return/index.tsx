import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { retrieveTokenUsingAuthorizationCode } from 'integrations/stitch/fetch-token';
import {
    getSessionVerifier,
    getStitchAccessToken,
    setStitchAccessToken
} from '../../integrations/storage/session-storage';
import Layout from '../../components/layout';

export default function Index() {
    const router = useRouter();
    const { code } = router.query;
    let verifier: string | null = null;
    if (typeof window !== 'undefined') {
        verifier = getSessionVerifier();
    }

    useEffect(() => {
        async function retrieveToken(): Promise<void> {
            if (code && verifier) {
                const response = await retrieveTokenUsingAuthorizationCode(`${code}`, verifier);
                setStitchAccessToken(response.access_token);
            }
        }

        retrieveToken().then(_ => {
            const token = getStitchAccessToken();
            if (token) {
                router.push('/report').then(_ => {}, _ => {});
            }
        }, () => {});
    }, [router, code, verifier]);

    return <Layout>
        Loading...
    </Layout>;
}
