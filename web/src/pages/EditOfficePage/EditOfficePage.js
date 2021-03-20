import OfficesLayout from 'src/layouts/OfficesLayout'
import EditOfficeCell from 'src/components/EditOfficeCell'

const EditOfficePage = ({ id }) => {
  return (
    <OfficesLayout>
      <EditOfficeCell id={id} />
    </OfficesLayout>
  )
}

export default EditOfficePage
