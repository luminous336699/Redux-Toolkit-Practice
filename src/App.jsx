import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Product from './components/Product';
import Plants from './components/Plants';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout></RootLayout>}>

      <Route index element={<Dashboard></Dashboard>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/products' element={<Product></Product>}></Route>
      <Route path='/plants' element={<Plants></Plants>}></Route>

    </Route>
  ))


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
export default App



