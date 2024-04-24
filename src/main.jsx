import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Root from './Root.jsx'
import Home from './pages/Home.jsx'
import AddCoffee from './pages/AddCoffee.jsx'
import CoffeeDetails from './pages/CoffeeDetails.jsx'
import UpdateCoffee from './pages/UpdateCoffee.jsx'
import 'react-toastify/dist/ReactToastify.css';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/admin',
        element: <Login />
      },
      {
        path: '/add_coffee',
        element: <AddCoffee />
      },
      {
        path: '/coffee_details/:id',
        element: <CoffeeDetails />,
        loader: (async({params}) => {
          const {id} = params 
          try {
            const response = await fetch(`http://localhost:5000/coffee/${id}`)
            const data = await response.json()
            return data
          } catch (error) {
            console.log(error)
          }
        })
      },
      {
        path: '/update_coffee/:id',
        element: <UpdateCoffee />,
        loader: ( async ({params}) => {
          const {id} = params 
          try {
            const response = await fetch(`http://localhost:5000/coffee/${id}`)
            const data = await response.json()
            return data
          } catch (error) {
            console.log(error)
          }
        } )
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
