import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Components/Layout/Layout.jsx";
import Login from "./Components/auth/Login.jsx";
import SignUp from "./Components/auth/SignUp.jsx";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp/>} />

    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
   

    <ToastContainer/>
    <RouterProvider router={router} />
  </StrictMode>
);
