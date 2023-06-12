import React from 'react';
import './App.css';
import Home from "./pages/Home"
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Cart from "./features/cart/cart"

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home>Hello world!</Home>,
  },
  {
    path: "/login",
    element: <LoginPage>Hello world!</LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage>Hello world!</SignupPage>,
  },
  {
    path: "/cart",
    element: <Cart>Hello world!</Cart>,
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
