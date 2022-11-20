import type { FindOfficeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Office from 'src/components/Office/Office'

export const QUERY = gql`
  query FindOfficeById($id: String!) {
    office: office(id: $id) {
      id
      officeName
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Office not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ office }: CellSuccessProps<FindOfficeById>) => {
  return <Office office={office} />
}
