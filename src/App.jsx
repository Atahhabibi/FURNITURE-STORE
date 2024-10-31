import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Products,
  Register,
  SingleProduct,
  Login
} from "../src/page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./page/Landing";
import { loader as SingleProductLoader } from "./page/SingleProduct";
import { loader as ProductsLoader } from "./page/Products";
import { action as RegisterAction } from "./page/Register";
import { action as loginAction } from "./page/Login";
import { store } from "./store";
import { loader as checkoutLoader } from "./page/Checkout";
import { action as checkoutAction } from "./components/CheckoutForm";
import { loader as ordersLoader } from "./page/Orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient)
      },
      {
        path: "products",
        element: <Products />,
        loader: ProductsLoader(queryClient),
        errorElement: <ErrorElement />
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: SingleProductLoader(queryClient),
        errorElement: <ErrorElement />
      },
      { path: "about", element: <About /> },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient)
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(store, queryClient)
      }
    ]
  },

  {
    path: "/login",
    element: <Login />,
    action: loginAction(store),
    errorElement: <Error />
  },

  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: RegisterAction
  }
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
