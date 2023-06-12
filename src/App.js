import React from 'react';
import './App.css';
import Home from "./pages/Home"
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Cart from "./features/cart/cart"
import Checkout from './pages/checkout';
import ProductDetailsPage from './pages/productDetailsPage';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/productdetails",
    element: <ProductDetailsPage></ProductDetailsPage>,
  },

]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
