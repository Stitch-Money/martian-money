import { ReportContents } from './reportContents';
import { BankAccountsQuery } from '../../integrations/stitch/query/queries';
import { BankAccountResponse } from '../../integrations/stitch/query/query-response-types';
import { useQuery } from '@apollo/client';
import React from 'react';

export default function Reports() {
    const bankAccountResponse = useQuery<BankAccountResponse>(BankAccountsQuery);
    console.log('Errors', bankAccountResponse.error);
    console.log('bankAccountResponse', bankAccountResponse);

    if (bankAccountResponse.loading) {
        return <progress className="progress is-large is-info" max="100">60%</progress>;
    }

    const bankAccount = bankAccountResponse.data?.user.bankAccounts.find(x => x.accountType === 'cheque') ??
        bankAccountResponse.data?.user.bankAccounts[0];

    if (bankAccount === undefined) {
        throw new Error('No bank accounts retrieved from Stitch.');
    }
    return (
        <ReportContents bankAccount={bankAccount} />
    );
}
