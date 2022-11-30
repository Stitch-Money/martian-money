const isDevelopment = process.env.NODE_ENV === 'development';

export const StitchConfiguration = {
    apiUri: 'https://api.stitch.money/graphql',
    identityServerUri: 'https://secure.stitch.money',
    clientId: 'c05f0a6c-4d56-4306-830b-1a0a35fd5075',
    testClientId: process.env.NEXT_PUBLIC_TEST_CLIENT_ID,
    redirectUri: isDevelopment ? 'http://localhost:3000/return' : 'https://martian.money/return',
    clientSecret: isDevelopment ? process.env.NEXT_PUBLIC_TEST_CLIENT_SECRET : process.env.NEXT_PUBLIC_PROD_CLIENT_SECRET
};
