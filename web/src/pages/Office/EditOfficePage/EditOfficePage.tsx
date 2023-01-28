import EditOfficeCell from 'src/components/Office/EditOfficeCell'

type OfficePageProps = {
  id: string
}

const EditOfficePage = ({ id }: OfficePageProps) => {
  return <EditOfficeCell id={id} />
}

export default EditOfficePage
