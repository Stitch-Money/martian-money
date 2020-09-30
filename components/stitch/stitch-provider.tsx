import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { stitchClient } from 'integrations/stitch/stitch-api-client';
import { ApolloClient } from '@apollo/client/core';
import { getStitchAccessToken } from '../../integrations/storage/session-storage';

export function StitchProvider(props: { children: JSX.Element | JSX.Element[] }): JSX.Element {
    const [client, setClient] = useState<ApolloClient<any>>();
    const token = getStitchAccessToken();

    useEffect(() => {
        if (token) {
            const client = stitchClient(token);
            setClient(client);
        }
    }, [token]);

    if (client) {
        return <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>;
    } else return <></>;
}
