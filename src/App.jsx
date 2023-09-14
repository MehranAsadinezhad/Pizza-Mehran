import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./features/home/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order/:orderId", element: <Order /> },
      { path: "/order", element: <CreateOrder /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
