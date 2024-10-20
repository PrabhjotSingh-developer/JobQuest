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
import {Provider} from "react-redux"
import store from "./Redux/store.js";
import Home from "./Pages/Home.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>}/>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp/>} />

    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <Provider store={store}>
        <ToastContainer/>
    <RouterProvider router={router} />
    </Provider>
  
  </StrictMode>
);
