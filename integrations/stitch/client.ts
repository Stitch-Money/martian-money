export const StitchConfiguration = {
    apiUri: 'https://api.stitch.money/graphql',
    identityServerUri: 'https://secure.stitch.money',
    clientId: 'c05f0a6c-4d56-4306-830b-1a0a35fd5075',
    testClientId: 'test-668f6d1c-6347-40d5-96cc-7c7b3461aebf',
    redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/return' : 'https://martian.money/return'
};
