import type { EditOfficeById, UpdateOfficeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import OfficeForm from 'src/components/Office/OfficeForm'

export const QUERY = gql`
  query EditOfficeById($id: String!) {
    office: office(id: $id) {
      id
      officeName
      companyId
      latitude
      longitude
    }
  }
`
const UPDATE_OFFICE_MUTATION = gql`
  mutation UpdateOfficeMutation($id: String!, $input: UpdateOfficeInput!) {
    updateOffice(id: $id, input: $input) {
      id
      officeName
      companyId
      latitude
      longitude
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ office }: CellSuccessProps<EditOfficeById>) => {
  const [updateOffice, { loading, error }] = useMutation(
    UPDATE_OFFICE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Office updated')
        navigate(routes.offices())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateOfficeInput,
    id: EditOfficeById['office']['id']
  ) => {
    updateOffice({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Office {office?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <OfficeForm office={office} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
