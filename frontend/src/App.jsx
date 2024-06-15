import * as React from 'react';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';



function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/Register",
    element:<Register/>
  },
  {
    path:"/Reset",
    element:<Reset/>
  }
 ])


  return (
    <>
    
      <Welcome/>
      {/* <Login/> */}
      {/* <Register/> */}
      <RouterProvider router={router}/>
      {/* <Reset/> */}
      
      
    </>
  )
}

export default App
