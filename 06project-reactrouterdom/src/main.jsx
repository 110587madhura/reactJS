// import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, 
  RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contacts/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='user/' element={<User/>}>
            <Route path=':userid' element={<User/>} />
        </Route>
        <Route path='*' element={<div>Not Found</div>} />
        <Route
          loader={githubInfoLoader}
          path='github' 
          element={ <Github/> } />
      
    </Route>
  )
) 

ReactDOM.createRoot(document.getElementById('root')).render(
    < RouterProvider router={router}/>
)
