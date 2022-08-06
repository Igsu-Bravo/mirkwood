export const schema = gql`
  type Developer {
    id: String!
    alias: String!
    role: String!
    company: Company!
    companyId: String!
    createdAt: DateTime!
  }

  type Query {
    developers: [Developer!]! @requireAuth
    developer(id: String!): Developer @requireAuth
  }

  input CreateDeveloperInput {
    alias: String!
    role: String!
    companyId: String!
  }

  input UpdateDeveloperInput {
    alias: String
    role: String
    companyId: String
  }

  type Mutation {
    createDeveloper(input: CreateDeveloperInput!): Developer! @requireAuth
    updateDeveloper(id: String!, input: UpdateDeveloperInput!): Developer!
      @requireAuth
    deleteDeveloper(id: String!): Developer! @requireAuth
  }
`
