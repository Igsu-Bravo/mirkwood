import { MetaTags } from '@redwoodjs/web'

import OfficesCell from 'src/components/OfficesCell'

const LocationsPage = () => {
  return (
    <>
      <MetaTags title="Locations" description="Locations page" />

      <h1>LocationsPage</h1>
      <OfficesCell />
    </>
  )
}

export default LocationsPage
