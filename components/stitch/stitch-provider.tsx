import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { stitchClient } from 'integrations/stitch/query/stitch-api-client';
import { ApolloClient } from '@apollo/client/core';
import CryptoJS from 'crypto-js';
import { getStitchAccessToken } from '../../integrations/storage/session-storage';

export function StitchProvider(props: { children: JSX.Element | JSX.Element[] }): JSX.Element {
    const [client, setClient] = useState<ApolloClient<any>>();
    const token = getStitchAccessToken();

    useEffect(() => {
        if (token) {
            const decryptedToken = CryptoJS.AES.decrypt(
                token,
                process.env.NEXT_PUBLIC_ENCRYPT_KEY
            ).toString(CryptoJS.enc.Utf8);

            const client = stitchClient(decryptedToken);
            setClient(client);
        }
    }, [token]);

    if (client) {
        return <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>;
    } else return <></>;
}
