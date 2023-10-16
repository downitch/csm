import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


import './index.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Forgot from './components/Forgot/Forgot.jsx';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/forgot",
    element: <Forgot />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);