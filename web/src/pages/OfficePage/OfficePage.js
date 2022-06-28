import OfficesLayout from 'src/layouts/OfficesLayout'
import OfficeCell from 'src/components/OfficeCell'

const OfficePage = ({ id }) => {
  return (
    <OfficesLayout>
      <OfficeCell id={id} />
    </OfficesLayout>
  )
}

export default OfficePage
