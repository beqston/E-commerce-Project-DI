import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Layout from "../Layout/Layout";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import Checkout from "../Pages/Checkout";
import UsersPage from "../Pages/UsersPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";


const RouterComponent = ()=> {
    return(
        <Routes>
            <Route element={<Layout />}>
                <Route path="/"  element={<Home />} />
                <Route path="/products/:productsName"  element={<Products />} />
                <Route path="/products/:productsName/:productID"  element={<Product />} />
                <Route path="/chekout" element={<Checkout />} />
                <Route path="*"  element={<NotFound />} />


                <Route>
                    <Route path="users"  element={<UsersPage />} />
                    <Route path="register"  element={<Register />} />
                    <Route path="login"  element={<Login />} />
                    <Route path="profile"  element={<UserProfile />} />
                </Route>
                

            </Route>
        </Routes>
    )
}
  
  export default RouterComponent;