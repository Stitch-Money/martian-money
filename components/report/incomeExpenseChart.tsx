import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export function IncomeExpenseChart(): JSX.Element {

    const data = useMemo(
        () => [
            { month: 1, income: 50000, expenses: 30000 },
            { month: 2, income: 52000, expenses: 58000 },
            { month: 3, income: 51000, expenses: 26000 }
        ],
        []
    );

    return (
        <ResponsiveContainer className="tile">
            <BarChart data={data}>
                <Tooltip cursor={false} />
                <XAxis dataKey="month"/>
                <YAxis tickFormatter={value => `R ${value}`} />
                <Bar dataKey="income" fill="#275DAD"/>
                <Bar dataKey="expenses" fill="#870D0D"/>
                <Legend />
            </BarChart>
        </ResponsiveContainer>
    );
}
