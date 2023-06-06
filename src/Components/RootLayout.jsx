import { Outlet } from "react-router-dom"
import NavbarPanel from "./Navbar"
import { Provider } from "react-redux"
import store from "./Store/Store"

const RootLayout = () => {
  return (
    <div>
        <Provider store={store}> 
            <NavbarPanel/>
      <main>
        <Outlet /> 
      </main>
      </Provider>
    </div>
  )
}

export default RootLayout
