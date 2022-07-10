import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MainPage = () => {
  return (
    <>
      <MetaTags title="Main" description="Main page" />

      <h2>See map locations</h2>
      <p>Map locations should be displayed here</p>
    </>
  )
}

export default MainPage
