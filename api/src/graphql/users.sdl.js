export const schema = gql`
  type User {
    id: String!
    email: String!
    name: String
    createdAt: DateTime!
    canSeeMap: Boolean!
    description: String
    isAdmin: Boolean!
    employee: Employee
  }

  type Employee {
    id: String!
    userId: String!
    companyId: String!
    officeId: String!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
  }

  input CreateUserInput {
    email: String!
    name: String
    canSeeMap: Boolean!
    description: String
    isAdmin: Boolean!
  }

  input UpdateUserInput {
    email: String
    name: String
    canSeeMap: Boolean
    description: String
    isAdmin: Boolean
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
