import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom";
import MobileNavbar from "./components/navigation/MobileNavbar";

function App() {
  // const data = useRouteLoaderData("root");
  // console.log("Log from App.jsx", data); // Just for debugging

  return (
    <>
      <header>
        <MobileNavbar />
      </header>
      <main className="px-5 pt-5 mb-24 md:mb-0">
        <Outlet />
      </main>
    </>
  );
}

export default App;
