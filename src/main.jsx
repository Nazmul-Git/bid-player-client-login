import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Players from './Components/Players/Players.jsx';
import Login from './Components/Login/Login';
import PlayerDetails from './Components/PlayerDetails/PlayerDetails';
// import PlayerDetails from './Components/PlayerDetails/PlayerDetails.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/players',
        element:<Players></Players>,
        loader:()=>fetch('http://localhost:5000/players')
      },
      {
        path:'/players/:id',
        element:<PlayerDetails></PlayerDetails>,
        loader:({params})=>fetch(`http://localhost:5000/players/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
