import { Link, routes } from '@redwoodjs/router'

import Offices from 'src/components/Offices'

export const QUERY = gql`
  query OFFICES {
    offices {
      id
      officeName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No offices yet. '}
      <Link to={routes.newOffice()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ offices }) => {
  return <Offices offices={offices} />
}
