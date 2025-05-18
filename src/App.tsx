import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Cobra from "./components/Cobra";
import Scribbly from "./components/Scribbly";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/work/cobra", element: <Cobra /> },
        { path: "/work/scribbly", element: <Scribbly /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
