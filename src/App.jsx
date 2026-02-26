import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Install from "./pages/Install";
import Setup from "./pages/Setup";
import Usage from "./pages/Usage";
import Tips from "./pages/Tips";
import FirstProject from "./pages/FirstProject";
import Advanced from "./pages/Advanced";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/install", element: <Install /> },
      { path: "/setup", element: <Setup /> },
      { path: "/usage", element: <Usage /> },
      { path: "/tips", element: <Tips /> },
      { path: "/first-project", element: <FirstProject /> },
      { path: "/advanced", element: <Advanced /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
