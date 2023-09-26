import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Root from './routes/Root.tsx'
import ErrorPage from './errors-page.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}