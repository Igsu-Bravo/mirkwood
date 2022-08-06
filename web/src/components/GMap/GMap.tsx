import { useEffect, useRef } from 'react'

import { Wrapper, Status } from '@googlemaps/react-wrapper'

import config from 'src/config'

interface props {
  center: google.maps.LatLngLiteral
  zoom: number
}

const MapComponent = ({ center, zoom }: props) => {
  const ref = useRef()

  useEffect(() => {
    // eslint-disable-next-line
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    })
  })

  return <div ref={ref} id="map" />
}

const render = (status: Status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>
  if (status === Status.FAILURE) return <h3>{status} ...</h3>
  return null
}

const GMap = () => {
  const center = { lat: 61.9241, lng: 25.7482 }
  const zoom = 5

  return (
    <div>
      <Wrapper apiKey={config.GOOGLE_MAPS_API_KEY} render={render}>
        <MapComponent center={center} zoom={zoom} />
      </Wrapper>
    </div>
  )
}

export default GMap
