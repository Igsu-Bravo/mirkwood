import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.main()}>DevData</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>What is this?</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
