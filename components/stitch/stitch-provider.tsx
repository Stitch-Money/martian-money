import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { retrieveTokenUsingAuthorizationCode } from 'integrations/stitch/fetch-token';
import { stitchClient } from 'integrations/stitch/stitch-api-client';
import { ApolloClient } from '@apollo/client/core';
import { getSessionVerifier } from '../../integrations/storage/session-storage';

export function StitchProvider(props: { children: JSX.Element | JSX.Element[] }): JSX.Element {
    const [client, setClient] = useState<ApolloClient<any>>();
    const router = useRouter();
    const { code } = router.query;
    let verifier: string | null = null;
    if (typeof window !== 'undefined') {
        verifier = getSessionVerifier();
    }

    useEffect(() => {
        async function createClient(): Promise<void> {
            if (code && verifier) {
                const response = await retrieveTokenUsingAuthorizationCode(`${code}`, verifier);
                const client = stitchClient(response.access_token);
                setClient(client);
            }
        }

        createClient().then(_ => {}, _ => {});
    }, [code, verifier]);

    if (client) {
        return <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>;
    } else return <></>;
};
