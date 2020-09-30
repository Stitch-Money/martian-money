import { gql } from '@apollo/client';

export const BankAccounts = gql`
    query BankAccounts {
        user {
            bankAccounts {
                id
                name
                accountNumber
                accountType
                availableBalance
                bankId
                branchCode
                currentBalance
            }
        }
    }`;

export const TransactionsByBankAccount = gql`
    query TransactionsByBankAccount($accountId: ID!) {
        node(id: $accountId) {
            ... on BankAccount {
                transactions {
                    edges {
                        node {
                            id
                            amount
                            reference
                            description
                            date
                            runningBalance
                        }
                    }
                }
            }
        }
    }
`;

export const TransactionCategoriesByBankAccount = gql`
    query TransactionCategoriesByBankAccount($accountId: ID!) {
        node(id: $accountId) {
            ... on BankAccount {
                transactions {
                    edges {
                        node {
                            id
                            categories {
                                description
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const DebitOrdersByBankAccount = gql`
    query DebitOrdersByBankAccount($accountId: ID!) {
        node(id: $accountId) {
            ... on BankAccount {
                debitOrderPayments {
                    edges {
                        node {
                            id
                            date
                            amount
                            reference
                        }
                    }
                }
            }
        }
    }
`;
