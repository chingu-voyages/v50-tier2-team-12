import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from "../App";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import MobileNavbar from "../components/navigation/MobileNavbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: ({ request: { signal } }) => {
      console.log("Loader executed");
      return fetch("https://menus-api.vercel.app/", { signal });
    },
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <MobileNavbar />
      <h1>Error - Something went wrong</h1>
      {/* Show full error when in dev environment */}
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
