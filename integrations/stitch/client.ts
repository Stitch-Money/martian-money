export const StitchConfiguration = {
    apiUri: 'https://api-test.stitch.money/graphql',
    identityServerUri: 'https://secure-test.stitch.money',
    clientId: 'c3222b65-da9e-4531-93bd-47b47e0f0f9f',
    testClientId: 'test-95105efc-b6f5-42c5-8396-8da6187c97d3',
    redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/return' : 'https://martian.money/return'
};

// const StitchConfiguration = {
//     apiUri: 'https://api.stitch.money/graphql',
//     identityServerUri: 'https://secure.stitch.money',
//     clientId: 'c05f0a6c-4d56-4306-830b-1a0a35fd5075',
//     testClientId: '', // TODO
//     redirectUri: 'http://localhost:3000/return'
// };
