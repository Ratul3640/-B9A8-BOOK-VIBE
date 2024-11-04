import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx/Root';
import Home from './Components/Root.jsx/Home/Home';
import Book from './Components/Books/Book';
import PagesToRead from './Components/PagesToRead/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/book:id',
        element: <Book></Book>,
        loader: () => fetch('/Books.json')
      },
      {
        path: '/pagetoread',
        element: <PagesToRead></PagesToRead>,
      },
      {
        
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
