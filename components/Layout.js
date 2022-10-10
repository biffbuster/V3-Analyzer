import NavBar from './navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-black  bg-gray-50">
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
