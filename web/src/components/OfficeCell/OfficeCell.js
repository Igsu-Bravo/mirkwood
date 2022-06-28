import Office from 'src/components/Office'

export const QUERY = gql`
  query FIND_OFFICE_BY_ID($id: String!) {
    office: office(id: $id) {
      id
      officeName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Office not found</div>

export const Success = ({ office }) => {
  return <Office office={office} />
}
