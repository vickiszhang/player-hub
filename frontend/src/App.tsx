import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ErrorPage from './errors-page.tsx'
import Navbar from './components/Navbar/Navbar.tsx'

//route imports
import Home from './routes/Home.tsx'
import Profile from './routes/Profile.tsx'
import Connections from './routes/Connections.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },

  {
    path: "/connections",
    element: <Connections />,
    errorElement: <ErrorPage />
  },

  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />
  }

])

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}