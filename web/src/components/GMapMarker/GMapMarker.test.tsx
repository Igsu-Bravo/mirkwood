import { render } from '@redwoodjs/testing/web'

import GMapMarker from './GMapMarker'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GMapMarker', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GMapMarker />)
    }).not.toThrow()
  })
})
