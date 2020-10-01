import { useQuery } from '@apollo/client';
import { sendStatementEmail } from 'integrations/sib-email/email-client';
import { BankAccountsQuery, IdentityQuery, StatementsByBankAccountQuery } from 'integrations/stitch/query/queries';
import { BankAccountResponse, IdentityResponse } from 'integrations/stitch/query/query-response-types';
import React from 'react';

export function StatementContents(): JSX.Element {

    const bankAccountResponse = useQuery<BankAccountResponse>(BankAccountsQuery);
    console.log('Errors', bankAccountResponse.error);
    console.log('bankAccountResponse', bankAccountResponse);
    const currentAccount =  bankAccountResponse.data?.user.bankAccounts.filter((acc) => acc.accountType === 'current')[0];
    const currentAccountId = currentAccount?.id;

    const statementsResponse = useQuery<BankAccountResponse>(StatementsByBankAccountQuery, {
        variables: { accountId: currentAccountId }
    });

    const accountStatements = statementsResponse.data?.user.bankAccounts[0].accountStatements;
    const statementPayload = accountStatements![0].payload;
    console.log('Statement', statementPayload);
    console.log('Errors', statementsResponse.error);

    const identityQuery = useQuery<IdentityResponse>(IdentityQuery);
    const identity = identityQuery.data?.user.identity;

    sendStatementEmail(identity, accountStatements);

    return (
        <>
            <h1 className="title">Send your banking statement to finalise your loan!</h1>
            <p>currentAccountId {currentAccountId}</p>
            <p>statementPayload {statementPayload}</p>
        </>
    );
}
