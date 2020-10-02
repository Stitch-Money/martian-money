import { Cell, LabelList, Pie, PieChart, PieLabelRenderProps, ResponsiveContainer, Tooltip } from 'recharts';
import React from 'react';
import { BankAccountId } from 'integrations/stitch/types';
import { useQuery } from '@apollo/client';
import { TransactionCategoriesResponse } from 'integrations/stitch/query/query-response-types';
import {
    TransactionCategoriesByBankAccountQuery
} from 'integrations/stitch/query/queries';
import {
    getTransactionCategorySummary,
    TransactionCategoriesSummary,
    TransactionCategorySummary
} from 'util/transaction-category-summary';

export function TransactionCategoryChart(props: { accountId: BankAccountId }): JSX.Element {
    const response = useQuery<TransactionCategoriesResponse>(TransactionCategoriesByBankAccountQuery, {
        variables: { accountId: props.accountId }
    });

    if (response.loading) {
        return <progress className="progress is-small is-info" max="100">60%</progress>;
    }

    const transactions = response.data?.node.transactions.edges.map(x => x.node);
    console.log(transactions);
    const data: TransactionCategoriesSummary =
        getTransactionCategorySummary(transactions)
            .sort((a, b) => (a.value > b.value) ? 1 : -1)
            .slice(-3);

    const COLORS = ['#D63908', '#FF9559', '#FFC58F', '#a74808'];

    const renderLabel = (entry: PieLabelRenderProps) => entry.name;

    return (
        <ResponsiveContainer className="tile" minHeight="300px">
            <PieChart>
                <Tooltip formatter={value => `R ${value}`}/>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="50%"
                    outerRadius="70%"
                    label={renderLabel}>
                    <LabelList dataKey="name"/>
                    {
                        data.map((_entry: TransactionCategorySummary, index) =>
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
