import { render } from '@redwoodjs/testing/web'

import GMap from './GMap'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GMap', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GMap />)
    }).not.toThrow()
  })
})
