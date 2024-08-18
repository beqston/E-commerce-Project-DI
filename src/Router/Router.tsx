import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Layout from "../Layout/Layout";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import Checkout from "../Pages/Checkout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";
import ProtectedRoute from "../ui/ProtectedRoute";


const RouterComponent = ()=> {
    return(
        <Routes>
            <Route element={<Layout />}>
                <Route path="/"  element={<Home />} />
                <Route path="/products/:productsName"  element={<Products />} />
                <Route path="/products/:productsName/:productID"  element={<Product />} />
                <Route path="/chekout" element={<Checkout />} />
                <Route path="*"  element={<NotFound />} />
                <Route path="register"  element={<Register />} />
                <Route path="login"  element={<Login />} />             
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route path="profile"  element={<UserProfile />} />
            </Route>
        </Routes>
    )
}
  export default RouterComponent;