export const schema = gql`
  type Office {
    id: String!
    officeName: String!
    employees: [Employee]!
  }

  type Query {
    offices: [Office!]!
    office(id: String!): Office
  }

  input CreateOfficeInput {
    officeName: String!
  }

  input UpdateOfficeInput {
    officeName: String
  }

  type Mutation {
    createOffice(input: CreateOfficeInput!): Office!
    updateOffice(id: String!, input: UpdateOfficeInput!): Office!
    deleteOffice(id: String!): Office!
  }
`
