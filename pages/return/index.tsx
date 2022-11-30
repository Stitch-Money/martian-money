import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { retrieveTokenUsingAuthorizationCode } from 'integrations/stitch/authorize/fetch-token';
import {
    getSessionVerifier,
    getStitchAccessToken,
    setStitchAccessToken
} from '../../integrations/storage/session-storage';
import Layout from '../../components/layout';
import Dome from '../../components/dome';

export default function Index() {
    const router = useRouter();
    const { code } = router.query;
    const verifier = getSessionVerifier();

    useEffect(() => {
        // User cancelled SSO flow, so we should route them to select a new experience
        if (!code && !verifier) {
            router.push('/select-experience').then(_ => {}, _ => {});
        }

        async function retrieveToken(): Promise<void> {
            if (code && verifier) {
                const response = await retrieveTokenUsingAuthorizationCode(`${code}`, verifier);

                if ('error' in response) {
                    throw new Error('Failed to fetch token.' + response.error);
                }

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
        <Dome />
        <div className="section">
            <div className="container">
                <progress className="progress is-large is-info" max="100">60%</progress>
            </div>
        </div>
    </Layout>;
}
