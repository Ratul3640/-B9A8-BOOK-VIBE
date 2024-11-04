import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}
  from "react-router-dom";


import MainLayOut from './mainlayOut.jsx/MainLayOut';

import { BiBook } from 'react-icons/bi';

import Wishlist from './Components/Wishlist/Wishlist';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import ReadBooks from './Components/ReadBooks/ReadBooks';
import Home from './Components/Home/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:id',
        element: <BiBook></BiBook>,
        loader: () => fetch('/Books.json')

      },
      {
        path: '/pagetoread',
        element: <PagesToRead></PagesToRead>,

      },

      {
        path: '/listedbooks',
        element: <ReadBooks></ReadBooks>,
        children: [

          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
            loader: () => fetch('Books.json'),
          },
          {
            path: 'readlist',
            element: <ReadBooks></ReadBooks>

          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>

          }
        ]
      }

    ]

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
