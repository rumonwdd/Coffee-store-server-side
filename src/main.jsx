import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffie from "./Components/AddCoffie.jsx";
import UpdateCoffiee from "./Components/UpdateCoffiee.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignOut from "./Components/Signup.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
import Main from "./Layout/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5175"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffie></AddCoffie>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffiee></UpdateCoffiee>,
    loader: ({ params }) =>
      fetch(
        `http://localhost:5175/coffee/${params.id}`
      ),
  },
  {
    path: "main",
    element: <Main></Main>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signout",
    element: <SignOut></SignOut>,
  },
  {
    path: "users",
    element: <Users></Users>,
    loader: () =>
      fetch(
        "https://coffie-store-clinet-hltydeeek-rumon-islams-projects.vercel.app/user"
      ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
