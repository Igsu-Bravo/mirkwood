import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import OfficeForm from 'src/components/OfficeForm'

export const QUERY = gql`
  query FIND_OFFICE_BY_ID($id: String!) {
    office: office(id: $id) {
      id
      officeName
    }
  }
`
const UPDATE_OFFICE_MUTATION = gql`
  mutation UpdateOfficeMutation($id: String!, $input: UpdateOfficeInput!) {
    updateOffice(id: $id, input: $input) {
      id
      officeName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ office }) => {
  const [updateOffice, { loading, error }] = useMutation(
    UPDATE_OFFICE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Office updated')
        navigate(routes.offices())
      },
    }
  )

  const onSave = (input, id) => {
    updateOffice({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Office {office.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OfficeForm
          office={office}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
