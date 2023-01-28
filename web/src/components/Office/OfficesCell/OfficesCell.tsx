import type { FindOffices } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Offices from 'src/components/Office/Offices'

export const QUERY = gql`
  query FindOffices {
    offices {
      id
      officeName
      companyId
      latitude
      longitude
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No offices yet. '}
      <Link
        to={routes.newOffice()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ offices }: CellSuccessProps<FindOffices>) => {
  return <Offices offices={offices} />
}
