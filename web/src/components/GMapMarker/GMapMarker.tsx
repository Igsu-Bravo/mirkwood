import { useState, useEffect } from 'react'

const GMapMarker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>()

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker())
    }

    return () => {
      if (marker) marker.setMap(null)
    }
  }, [marker])

  useEffect(() => {
    if (marker) marker.setOptions(options)
  }, [marker, options])

  // Return null since the GMap component handles the DOM manipulation
  return null
}

export default GMapMarker
