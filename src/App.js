import React from 'react';
import './App.css';
import Home from "./pages/Home"
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';

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
    element: <Login>Hello world!</Login>,
  },
  {
    path: "/signup",
    element: <Signup>Hello world!</Signup>,
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
