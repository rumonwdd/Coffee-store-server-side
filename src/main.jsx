import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffie from './Components/AddCoffie.jsx';
import UpdateCoffiee from './Components/UpdateCoffiee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffie></AddCoffie>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffiee></UpdateCoffiee>,
    loader : ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
