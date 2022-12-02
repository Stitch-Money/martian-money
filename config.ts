const getEnvironmentVariable = (environmentVariable: string): string => {
    const unvalidatedEnvironmentVariable = process.env[environmentVariable];
    if (!unvalidatedEnvironmentVariable) {
        throw new Error(
            `Couldn't find environment variable: ${environmentVariable}`
        );
    } else {
        return unvalidatedEnvironmentVariable;
    }
};

export const config = {
    clientId: getEnvironmentVariable('NEXT_PUBLIC_CLIENT_ID'),
    clientSecret: getEnvironmentVariable('NEXT_PUBLIC_CLIENT_SECRET'),
    testClientId: getEnvironmentVariable('NEXT_PUBLIC_TEST_CLIENT_ID'),
    testClientSecret: getEnvironmentVariable('NEXT_PUBLIC_TEST_CLIENT_SECRET'),
    encryptionKey: getEnvironmentVariable('NEXT_PUBLIC_ENCRYPT_KEY')
};
