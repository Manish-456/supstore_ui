import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './App.scss'
function App() {
 const LayOut = () => {
  return (
    <div className="App">
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  )
 }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children : [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/category/:id",
          element: <Category />
        },
        {
          path: "/product/:id",
          element: <Product />
        }
      ]
    },
   
  ]);
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
