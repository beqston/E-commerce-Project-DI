import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Headphones from "../Pages/Headphones";
import Speakers from "../Pages/Speakers";
import Earphones from "../Pages/Eearphones";
import NotFound from "../Pages/NotFound";


const Router = ()=> {
    return(
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/headphones"  element={<Headphones />} />
            <Route path="/speakers"  element={<Speakers />} />
            <Route path="/earphones"  element={<Earphones />} />
            <Route path="*"  element={<NotFound />} />
        </Routes>
    )
}
  
  export default Router;