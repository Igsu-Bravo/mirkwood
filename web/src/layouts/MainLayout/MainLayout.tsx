type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>
        <h1>DevData</h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
