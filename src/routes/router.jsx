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
import Dashboard from '../layouts/Dashboard';
import MyBookings from '../DashboardComponents/MyBookings';
import AllUsers from '../DashboardComponents/AllUsers';
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
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'/dashboard/my-bookings',
        element:<MyBookings></MyBookings>
      },
      // {
      //   path:'/dashboard/user-home',
      //   element:<div>hello user home</div>
      // },
      // {
      //   path:'/dashboard/reservation',
      //   element:<div>reservation</div>
      // },
      // {
      //   path:'/dashboard/payment',
      //   element:<div>payment</div>
      // },
      // {
      //   path:'/dashboard/my-cart',
      //   element:<div>my-cart</div>
      // },
      // {
      //   path:'/dashboard/add-review',
      //   element:<div>add review</div>
      // },

      // admin routes
      {
        path:"/dashboard/admin-home",
        element:<div>admin home</div>
      },
      {
        path:'/dashboard/add-items',
        element:<div>add items</div>
      },
      {
        path:'/dashboard/manage-items',
        element:<div>manage items</div>
      },
      {
        path:'/dashboard/bookings',
        element:<div>manage bookings</div>
      },
      {
        path:'/dashboard/users',
        element:<AllUsers></AllUsers>
      },
    ]
  }
]);


export default router