import { useQuery } from '@apollo/client';
import ChartCard from 'components/report/chart-card';
import { sendStatementEmail } from 'integrations/sib-email/email-client';
import { BankAccountsQuery, IdentityQuery, StatementsByBankAccountQuery } from 'integrations/stitch/query/queries';
import { BankAccountResponse, IdentityResponse } from 'integrations/stitch/query/query-response-types';
import React from 'react';

export function StatementContents(): JSX.Element {

    const bankAccountResponse = useQuery<BankAccountResponse>(BankAccountsQuery);
    console.log('Errors', bankAccountResponse.error);
    console.log('bankAccountResponse', JSON.stringify(bankAccountResponse.data?.user.bankAccounts));
    const currentAccount =  bankAccountResponse.data?.user.bankAccounts.filter((acc) => acc.accountType === 'current')[0];
    console.log('currentAccount', JSON.stringify(currentAccount));
    const currentAccountId = currentAccount?.id;
    console.log('currentAccountId', currentAccountId);

    try {
        const statementsResponse = useQuery<BankAccountResponse>(StatementsByBankAccountQuery, {
            variables: { accountId: currentAccountId }
        });
    
        const bankAccounts = statementsResponse.data?.user.bankAccounts;
        if (bankAccounts) {
            const accountStatements = bankAccounts[0].accountStatements;
            const statementPayload = accountStatements![0].payload;
            console.log('Statement', statementPayload);
            console.log('Errors', statementsResponse.error);
        
            const identityQuery = useQuery<IdentityResponse>(IdentityQuery);
            const identity = identityQuery.data?.user.identity;
        
            console.log('identity', identity?.fullName);
        
            sendStatementEmail(identity, accountStatements);
        }
    
        return (
            <>
                <h1 className="title">Your statement has been successfully sent!</h1>
                <div className='columns is-centered'>
                <div className='column'>
                    <ChartCard title='Account Details'>
                        <p>Account Name: <b>{currentAccount?.name}</b></p>
                        <p>Account Number: <b>{currentAccount?.accountNumber}</b></p>
                    </ChartCard>
                </div>
            </div>
            </>
        );
      }
      catch(err) {
        return (
            <>
                <h1 className="title">Oops, something went wrong!</h1>
                <p>Message: {err.message}</p>
            </>
        );
      } 
}
