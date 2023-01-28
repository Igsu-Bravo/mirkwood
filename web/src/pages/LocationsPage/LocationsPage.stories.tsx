import type { ComponentMeta } from '@storybook/react'

import LocationsPage from './LocationsPage'

export const generated = () => {
  return <LocationsPage />
}

export default {
  title: 'Pages/LocationsPage',
  component: LocationsPage,
} as ComponentMeta<typeof LocationsPage>
