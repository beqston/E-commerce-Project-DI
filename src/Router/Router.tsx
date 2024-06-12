import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Layout from "../Layout/Layout";
import Product from "../Pages/Product";
import Products from "../Pages/Products";


const RouterComponent = ()=> {
    return(
        <Routes>
            <Route element={<Layout />}>
                <Route path="/"  element={<Home />} />
                <Route path="/products/:productsName"  element={<Products />} />
                <Route path="/products/:productsName/:productID"  element={<Product />} />
                <Route path="*"  element={<NotFound />} />
            </Route>
        </Routes>
    )
}
  
  export default RouterComponent;