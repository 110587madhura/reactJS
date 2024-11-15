import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './Layout.js';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.js'
 import About from "./components/About/About.js";
 import User from "./components/User/User.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />} >
        {/* <Route path=':userid' element={<User />} /> */}
      </Route>
      {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} /> */}
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <> 
  <RouterProvider router={router} />
  <App/>
  </>

);


