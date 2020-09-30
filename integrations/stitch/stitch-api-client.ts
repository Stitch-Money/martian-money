import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BankAccounts } from './query/queries';
import { getStitchAccessToken } from '../storage/session-storage';

// Apollo Client chains together ApolloLinks to add our token to every request

const httpLink = createHttpLink({
    uri: 'https://api.stitch.money/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = getStitchAccessToken();

    if (token === null) {
        throw new Error('Token was undefined. Failed to create ApolloClient auth link.');
    }

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`
        }
    };
});

const stitchClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export async function getBankAccounts() {
    const result = await stitchClient.query({ query: BankAccounts });

    console.log('Result from Stitch API.\nData: ', result.data, '\nErrors:', result.errors);

    return result.data;
}
