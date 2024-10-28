import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, redirect,LoaderFunctionArgs } from "react-router-dom"
import Root from "./routes/root";
import { LoginPage } from "./page/login";
import { ErrorPage } from "./page/errorPage";
import { HomePage } from "./page/home";
import { fakeAuthProvider } from "./auth/auth";
import "./App.css"
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: protectedLoader,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);



function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
