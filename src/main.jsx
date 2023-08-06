import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Root , {loader as rootLoader, action as rootAction} from './routes/root'
import ErrorPage from './error-page'
import Contact , { loader as contactLoader} from './routes/contact'
import EditContact , { action as EditAction }from './routes/edit'
// import TestRoute from './routes/testRoute'
import { action as DestroyAction } from './routes/destroy'
import Index from './routes'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true,
        element: <Index />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact/>,
        loader: contactLoader,
        action: EditAction,
      },
      { 
        path: "contacts/:contactId/destroy",
        action: DestroyAction,
        errorElement: <div>Ooops unable to perform action</div>,
      },
    ],
  },
  // {
  //   path: '/testRoute',
  //   element: <TestRoute />,
  //   errorElement: <ErrorPage />,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
