import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Includes/Navbar';
import Sidebar from './Includes/Sidebar';
import Home from './Home';
import About from './About';
import Errorpage from './Errorpage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {isBrowser, isMobile } from 'react-device-detect';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Errorpage />,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      {isBrowser? <Navbar/> : <Sidebar/>}
      <RouterProvider router={router} />
  </React.StrictMode>
);