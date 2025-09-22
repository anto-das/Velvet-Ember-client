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
import AddItem from '../DashboardComponents/AddItem';
import AdminRoute from './AdminRoute';
import ManageItem from '../DashboardComponents/ManageItem';
import UpdateItem from '../DashboardComponents/UpdateItem';
import Payment from '../DashboardComponents/Payment';
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
      {
        path:'/dashboard/reservation',
        element:<Payment></Payment>
      },
      {
        path:'/dashboard/payment',
        element:<div>payment</div>
      },
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
        path:"admin-home",
        element:<div>admin home</div>
      },
      {
        path:'add-items',
        element:<AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path:'update-item/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params}) => fetch(`http://localhost:4000/menu/${params.id}`)
      },
      {
        path:'manage-items',
        element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path:'bookings',
        element:<div>manage bookings</div>
      },
      {
        path:'users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
    ]
  }
]);


export default router