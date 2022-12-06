import { ReportContents } from './reportContents';
import { BankAccountsQuery } from '../../integrations/stitch/query/queries';
import { BankAccountResponse } from '../../integrations/stitch/query/query-response-types';
import { useQuery } from '@apollo/client';
import React from 'react';

export default function Reports() {
    const { loading, error, data } = useQuery<BankAccountResponse>(BankAccountsQuery);

    if (loading) {
        return <progress className="progress is-large is-info" max="100">60%</progress>;
    }

    if (error) {
        console.error(error.message);
        throw new Error(error.message);
    }

    console.log('bankAccountResponse', data);
    const bankAccounts = data?.user.bankAccounts;

    if (bankAccounts === undefined) {
        throw new Error('No bank accounts retrieved from Stitch.');
    }
    return (
        <ReportContents bankAccounts={bankAccounts} />
    );
}
