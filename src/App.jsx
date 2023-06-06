import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Route>

  ))
  return (
<div>
    <RouterProvider router={router}/>
 </div>
  )
}

export default App
