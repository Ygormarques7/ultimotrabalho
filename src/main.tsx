import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Segunda from './paste/teste2.tsx'
import Primeira from './paste/teste1.tsx'
import Erro from './paste/on.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Erro/>,
    children:[
      {
        path: "primeira",
        element: <Primeira />
      }, {
        path: "segunda",
        element: <Segunda />
      }]
  }

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)