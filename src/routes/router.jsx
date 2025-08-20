import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';
import OurShop from '../pages/OurShop';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/contact-us',
        element:<div>this is contact page</div>
      },
      {
        path:'/dashboard',
        element:<div>this is dashboard</div>
      },
      {
        path:'/our-menu',
        element:<OurMenu></OurMenu>
      },
      {
        path:'/our-shop/:category',
        element:<PrivateRoute><OurShop></OurShop></PrivateRoute>
      },
      {
        path:'/sign-up',
        element:<SignUp></SignUp>
      },
      {
        path:'/sign-in',
        element:<SignIn></SignIn>
      }
    ]
  },
]);


export default router