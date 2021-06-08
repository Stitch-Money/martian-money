import { gql } from '@apollo/client';

export const BankAccountsQuery = gql`
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

export const TransactionsByBankAccountQuery = gql`
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

export const TransactionCategoriesByBankAccountQuery = gql`
    query TransactionCategoriesByBankAccount($accountId: ID!) {
        node(id: $accountId) {
            ... on BankAccount {
                transactions {
                    edges {
                        node {
                            id
                            amount
                            date
                            category {
                                description
                                probability
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const DebitOrdersByBankAccountQuery = gql`
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

export const StatementsByBankAccountQuery = gql`
    query StatementsByBankAccount($accountId: ID!) {
        node(id: $accountId) {
            ... on BankAccount {
                statements {
                    edges {
                        node {
                            certified
                            downloadUrl
                            filename
                            id
                            mimetype
                            startDate
                            endDate
                        }
                    }
                }
            }
        }
    }
`;


export const IdentityQuery = gql`
    query GetAccounts {
        user {
            identity {
                nickname
                middleName
                dateOfBirth
                email
                familyName
                fullName
                gender
                givenName
                contact {
                    name
                    phoneNumber
                }
                identifyingDocument {
                    ... on IdentityDocument {
                        country
                        number
                    }
                }
            }
        }
    }
`;
