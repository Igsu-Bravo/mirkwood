
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {  } from 'src/lib/formatters'

import type { DeleteOfficeMutationVariables, FindOfficeById } from 'types/graphql'

const DELETE_OFFICE_MUTATION = gql`
  mutation DeleteOfficeMutation($id: String!) {
    deleteOffice(id: $id) {
      id
    }
  }
`

interface Props {
  office: NonNullable<FindOfficeById['office']>
}

const Office = ({ office }: Props) => {
  const [deleteOffice] = useMutation(DELETE_OFFICE_MUTATION, {
    onCompleted: () => {
      toast.success('Office deleted')
      navigate(routes.offices())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteOfficeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete office ' + id + '?')) {
      deleteOffice({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Office {office.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{office.id}</td>
            </tr><tr>
              <th>Office name</th>
              <td>{office.officeName}</td>
            </tr><tr>
              <th>Company id</th>
              <td>{office.companyId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOffice({ id: office.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(office.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Office
