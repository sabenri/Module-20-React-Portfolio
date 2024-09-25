import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import App from './App';
import Home from './componts/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import ErrorPage from './components/pages/ErrorPage';

const router = createBrowerRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      element: <Home />
    },
    {
      path: 'home',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'resume',
      element: <Resume />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
    ],
  },
  {
    path: 'error-page',
    element:<ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
