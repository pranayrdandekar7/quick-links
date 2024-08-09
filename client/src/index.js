import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./views/Home/Home.js"
import "./index.css"
import MyLinks from './views/MyLinks/MyLinks.js';

const router = createBrowserRouter([
{
  path:'/',
  element:<Home/>
},
{
  path:'/mylinks',
  element:<MyLinks/>
}


])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router ={router}/>);



