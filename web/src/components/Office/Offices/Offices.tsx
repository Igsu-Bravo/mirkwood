import type { DeleteOfficeMutationVariables, FindOffices } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GMap from 'src/components/GMap/GMap'
import { QUERY } from 'src/components/Office/OfficesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_OFFICE_MUTATION = gql`
  mutation DeleteOfficeMutation($id: String!) {
    deleteOffice(id: $id) {
      id
    }
  }
`

const OfficesList = ({ offices }: FindOffices) => {
  const [deleteOffice] = useMutation(DELETE_OFFICE_MUTATION, {
    onCompleted: () => {
      toast.success('Office deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteOfficeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete office ' + id + '?')) {
      deleteOffice({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Office name</th>
            <th>Company id</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {offices.map((office) => (
            <tr key={office.id}>
              <td>{truncate(office.id)}</td>
              <td>{truncate(office.officeName)}</td>
              <td>{truncate(office.companyId)}</td>
              <td>{truncate(office.latitude)}</td>
              <td>{truncate(office.longitude)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.office({ id: office.id })}
                    title={'Show office ' + office.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editOffice({ id: office.id })}
                    title={'Edit office ' + office.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete office ' + office.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(office.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <GMap markers={offices} />
    </div>
  )
}

export default OfficesList
