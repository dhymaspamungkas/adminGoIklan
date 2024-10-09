import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import "./styles/global.scss"
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient( );

function App() {

  const Layout = ()=>{
    return(
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>

            <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Menggunakan 'Layout' yang benar
      children: [
        {
          path: "/", // Halaman Home
          element: <Home />
        },
        {
          path: "/users", // Halaman Users
          element: <Users />
        },
        {
          path: "/products", // Halaman Products
          element: <Products />
        },
        {
          path: "/users/:id", // Halaman Products
          element: <User />
        },
        {
          path: "/products/:id", // Halaman Products
          element: <Product />
        },
      ]
    },
    {
      path:"/Login",
      element:<Login/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
