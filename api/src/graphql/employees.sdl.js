export const schema = gql`
  type Employee {
    id: String!
    user: User!
    company: Company!
    office: Office!
    userId: String!
    companyId: String!
    officeId: String!
  }

  type Query {
    employees: [Employee!]!
  }

  input CreateEmployeeInput {
    userId: String!
    companyId: String!
    officeId: String!
  }

  input UpdateEmployeeInput {
    userId: String
    companyId: String
    officeId: String
  }
`
