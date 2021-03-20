import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/OfficesCell'

const DELETE_OFFICE_MUTATION = gql`
  mutation DeleteOfficeMutation($id: String!) {
    deleteOffice(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Office = ({ office }) => {
  const [deleteOffice] = useMutation(DELETE_OFFICE_MUTATION, {
    onCompleted: () => {
      toast.success('Office deleted')
      navigate(routes.offices())
    },
  })

  const onDeleteClick = (id) => {
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
            </tr>
            <tr>
              <th>Office name</th>
              <td>{office.officeName}</td>
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
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(office.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Office
