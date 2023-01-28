import OfficeCell from 'src/components/Office/OfficeCell'

type OfficePageProps = {
  id: string
}

const OfficePage = ({ id }: OfficePageProps) => {
  return <OfficeCell id={id} />
}

export default OfficePage
