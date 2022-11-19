import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Main from "./layouts/Main";
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory'
import { ProductsAndCartLoader } from "./loaders/ProductsAndCartLoader";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Shop />,
          loader: ()=>fetch('products.json')
        },
        {
          path: 'orders',
          element: <Orders />,
          loader: ProductsAndCartLoader
        },
        {
          path: 'inventory',
          element: <Inventory />
        }
      ]
    },
    {
      path: 'about',
      element: <About />
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
