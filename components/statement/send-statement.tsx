import { useQuery } from '@apollo/client';
import { BankAccountResponse } from '../../integrations/stitch/query/query-response-types';
import { BankAccountsQuery, StatementsByBankAccountQuery } from '../../integrations/stitch/query/queries';
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

    const statementPayload = statementsResponse.data?.user.bankAccounts[0].accountStatements![0].payload;
    console.log('Statement', statementPayload);
    console.log('Errors', statementsResponse.error);

    return (
        <>
            <h1 className="title">Send your banking statement to finalise your loan!</h1>
            <p>currentAccountId {currentAccountId}</p>
            <p>statementPayload {statementPayload}</p>
        </>
    );
}
