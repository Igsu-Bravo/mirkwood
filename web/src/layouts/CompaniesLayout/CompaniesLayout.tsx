import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CompanyLayoutProps = {
  children: React.ReactNode
}

const CompaniesLayout = ({ children }: CompanyLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.companies()}
            className="rw-link"
          >
            Companies
          </Link>
        </h1>
        <Link
          to={routes.newCompany()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Company
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CompaniesLayout
