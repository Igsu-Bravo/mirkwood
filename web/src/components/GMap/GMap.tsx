import {
  useEffect,
  useRef,
  Children,
  isValidElement,
  cloneElement,
  useState,
  type ReactNode,
} from 'react'

import { Wrapper, Status } from '@googlemaps/react-wrapper'

import config from 'src/config'
import { useDeepCompareEffectForMaps } from 'src/hooks'

import GMapMarker from 'src/components/GMapMarker/GMapMarker'
import { MapMarker } from 'types/map'

interface props extends google.maps.MapOptions {
  center: google.maps.LatLngLiteral
  zoom: number
  style?: { [key: string]: string }
  children?: ReactNode
  onClick?: (e: google.maps.MapMouseEvent) => void
  onIdle?: (map: google.maps.Map) => void
}

interface GMapProps {
  markers: MapMarker[];
}

const MapComponent = ({ center, zoom, children, ...options }: props) => {
  const ref = useRef<HTMLDivElement>()
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      )
    }
  }, [ref, map, center, zoom])

  useDeepCompareEffectForMaps(() => {
    if (map) map.setOptions(options)
  }, [map, options])

  return (
    <>
      <div ref={ref} id="map" />
      {Children.map(children, (child) => {
        if (isValidElement(child)) return cloneElement(child, { map })
      })}
    </>
  )
}

const render = (status: Status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>
  if (status === Status.FAILURE) return <h3>{status} ...</h3>
  return null
}

const GMap = (props: GMapProps) => {
  const center = { lat: 61.9241, lng: 25.7482 }
  // const markerPosition = { lat: 61.517701, lng: 23.754263 }
  const zoom = 5

  const { markers } = props;

  return (
    <div>
      <Wrapper apiKey={config.GOOGLE_MAPS_API_KEY} render={render}>
        <MapComponent center={center} zoom={zoom}>
        {markers.map((m, i) => (
            <GMapMarker key={i} position={{lat: m.latitude, lng: m.longitude}} />
          ))}
        </MapComponent>
      </Wrapper>
    </div>
  )
}

export default GMap
