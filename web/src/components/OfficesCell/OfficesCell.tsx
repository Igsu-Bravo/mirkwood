import type { OfficesQuery } from 'types/graphql'
import { MapMarker } from 'types/map'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GMap from '../GMap/GMap'

export const QUERY = gql`
  query OfficesQuery {
    offices {
      id
      officeName
      latitude
      longitude
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ offices }: CellSuccessProps<OfficesQuery>) => {
  const propsToMarkers = (): MapMarker[] => {
    return offices.map((e) => {
      return {
        latitude: e.latitude,
        longitude: e.longitude,
        officeName: e.officeName,
        companyId: e.companyId,
        id: e.id,
      }
    })
  }

  return <GMap markers={propsToMarkers()} />
}
