import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import OfficeForm from 'src/components/OfficeForm'

import { QUERY } from 'src/components/OfficesCell'

const CREATE_OFFICE_MUTATION = gql`
  mutation CreateOfficeMutation($input: CreateOfficeInput!) {
    createOffice(input: $input) {
      id
    }
  }
`

const NewOffice = () => {
  const [createOffice, { loading, error }] = useMutation(
    CREATE_OFFICE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Office created')
        navigate(routes.offices())
      },
    }
  )

  const onSave = (input) => {
    createOffice({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Office</h2>
      </header>
      <div className="rw-segment-main">
        <OfficeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewOffice
