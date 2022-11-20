export const schema = gql`
  type Office {
    id: String!
    officeName: String!
    Company: Company!
    companyId: String!
    latitude: Float!
    longitude: Float!
  }

  type Query {
    offices: [Office!]! @requireAuth
    office(id: String!): Office @requireAuth
  }

  input CreateOfficeInput {
    officeName: String!
    companyId: String!
    latitude: Float!
    longitude: Float!
  }

  input UpdateOfficeInput {
    officeName: String
    companyId: String
    latitude: Float
    longitude: Float
  }

  type Mutation {
    createOffice(input: CreateOfficeInput!): Office! @requireAuth
    updateOffice(id: String!, input: UpdateOfficeInput!): Office! @requireAuth
    deleteOffice(id: String!): Office! @requireAuth
  }
`
