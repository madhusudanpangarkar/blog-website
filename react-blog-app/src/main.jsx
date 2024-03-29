import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import Signin from './pages/Login/Signin.jsx';
import Signup from './pages/Register/Signup.jsx'
import CreateBlog from './pages/CreateBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog/>,
        loader: ({params}) => fetch(`http://localhost:3001/blogs/${params.id}`)
      }
    ]
  },
  {
    path: "/login",
    element: <Signin/>
  },
  {
    path: "/register",
    element: <Signup/>
  },
  {
    path: "/create-blog",
    element: <CreateBlog/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
