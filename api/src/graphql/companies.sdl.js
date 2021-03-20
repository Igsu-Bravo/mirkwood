export const schema = gql`
  type Company {
    id: String!
    companyName: String!
    employees: [Employee]!
  }

  type Query {
    companies: [Company!]!
    company(id: String!): Company
  }

  input CreateCompanyInput {
    companyName: String!
  }

  input UpdateCompanyInput {
    companyName: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company!
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
    deleteCompany(id: String!): Company!
  }
`
