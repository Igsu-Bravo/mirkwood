import { EffectCallback, useEffect, useRef, type MutableRefObject } from 'react'

import { isLatLngLiteral } from '@googlemaps/typescript-guards'
import {
  createCustomEqual,
  deepEqual,
  type TypeEqualityComparator,
} from 'fast-equals'

const areLatLngLiterals: TypeEqualityComparator<
  number | google.maps.LatLng | google.maps.LatLngLiteral,
  MutableRefObject<undefined>
> = (a, b) => {
  if (
    isLatLngLiteral(a) ||
    a instanceof google.maps.LatLng ||
    isLatLngLiteral(b) ||
    b instanceof google.maps.LatLng
  ) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
  }
  // use fast-equals for other objects
  return deepEqual(a, b)
}

// TODO: fix this mess
const deepCompareEqualsForMaps = createCustomEqual(() => ({
  areLatLngLiterals,
}))

const useDeepCompareMemoize = <T extends undefined>(value: T) => {
  const ref = useRef()

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

const useDeepCompareEffectForMaps = <T>(
  callback: EffectCallback,
  dependencies: T[]
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

export { useDeepCompareEffectForMaps, useDeepCompareMemoize }
