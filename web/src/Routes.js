// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/offices/new" page={NewOfficePage} name="newOffice" />
      <Route path="/offices/{id}/edit" page={EditOfficePage} name="editOffice" />
      <Route path="/offices/{id}" page={OfficePage} name="office" />
      <Route path="/offices" page={OfficesPage} name="offices" />
      <Route path="/companies/new" page={NewCompanyPage} name="newCompany" />
      <Route path="/companies/{id}/edit" page={EditCompanyPage} name="editCompany" />
      <Route path="/companies/{id}" page={CompanyPage} name="company" />
      <Route path="/companies" page={CompaniesPage} name="companies" />
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
