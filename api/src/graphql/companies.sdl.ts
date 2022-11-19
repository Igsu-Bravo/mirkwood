export const schema = gql`
  type Company {
    id: String!
    name: String!
    latitude: Float!
    longitude: Float!
    Developer: [Developer]!
    Office: [Office]!
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: String!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    latitude: Float!
    longitude: Float!
  }

  input UpdateCompanyInput {
    name: String
    latitude: Float
    longitude: Float
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
      @requireAuth
    deleteCompany(id: String!): Company! @requireAuth
  }
`
