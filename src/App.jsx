import './App.css'
import Button from "@mui/material/Button"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import {store} from './store'
import { Provider } from 'react-redux'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/cart' index element={<Cart/>}/>
      <Route path='/login' index element={<Login/>}/>
    </Route>
  )
)
function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
