import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContato from './Pages/AppContato'
import './index.css'
import AppSobre from './Pages/AppSobre'
import App from '../src/App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainBody from './Components/mainBody'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App/>,
  children: [
    {index:true, element: <MainBody/>},
    {path:'AppSobre', element: <AppSobre/>},
    {path:'AppContato', element: <AppContato/>},

  ]
  }

 ]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
