import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
import Home from './components/pages/home';
import Contact from './components/pages/Contact';
import About from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
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
);