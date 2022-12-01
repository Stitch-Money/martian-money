const isDevelopment = process.env.NODE_ENV === 'development';

export const StitchConfiguration = {
    apiUri: 'https://api.stitch.money/graphql',
    identityServerUri: 'https://secure.stitch.money',
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    testClientId: process.env.NEXT_PUBLIC_TEST_CLIENT_ID,
    testClientSecret: process.env.NEXT_PUBLIC_TEST_CLIENT_SECRET,
    redirectUri: isDevelopment ? 'http://localhost:3000/return' : 'https://martian.money/return'
};
