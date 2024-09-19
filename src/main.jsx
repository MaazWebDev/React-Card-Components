import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Hero from './components/Hero/Hero.jsx'
import SignleProductDetail from './components/SingleProductDetail/SignleProductDetail.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, 
        children:[
            {
                path: '/',
                element: <Hero />
            },
            {
                path: 'SignleProductDetail',
                element: <SignleProductDetail />
            },
        ],
    },
]);
createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router} />
  </>
)
