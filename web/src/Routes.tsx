// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import CompaniesLayout from 'src/layouts/CompaniesLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Offices" titleTo="offices" buttonLabel="New Office" buttonTo="newOffice">
        <Route path="/admin/offices/new" page={OfficeNewOfficePage} name="newOffice" />
        <Route path="/admin/offices/{id}/edit" page={OfficeEditOfficePage} name="editOffice" />
        <Route path="/admin/offices/{id}" page={OfficeOfficePage} name="office" />
        <Route path="/admin/offices" page={OfficeOfficesPage} name="offices" />
      </Set>
      <Set wrap={CompaniesLayout}>
        <Route path="/admin/companies/new" page={CompanyNewCompanyPage} name="newCompany" />
        <Route path="/admin/companies/{id}/edit" page={CompanyEditCompanyPage} name="editCompany" />
        <Route path="/admin/companies/{id}" page={CompanyCompanyPage} name="company" />
        <Route path="/admin/companies" page={CompanyCompaniesPage} name="companies" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={MainPage} name="main" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/locations" page={LocationsPage} name="locations" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
