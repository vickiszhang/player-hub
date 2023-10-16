import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './routes/Home.tsx'
import ErrorPage from './errors-page.tsx'
import Profile from './routes/profile.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },

  {
    path: "/profile",
    element: <Profile />
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}