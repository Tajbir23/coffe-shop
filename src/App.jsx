import { Outlet } from "react-router-dom"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Contact from "./components/Contact"
import { useContext, useEffect } from "react"
import { ContextCoffee } from "./Root"


function App() {
  const {checkUser} = useContext(ContextCoffee)
  useEffect(() => {
    checkUser()
  },[checkUser])

  return (
    <>
      <Header />
      <Outlet />
      <Contact />
      <Footer />
    </>
  )
}

export default App
