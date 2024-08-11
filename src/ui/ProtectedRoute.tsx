import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const ProtectedRoute = ()=> {

    let isLoginIn = false;

    if(window.localStorage.getItem("sb-kcevngpaeplxtwdwbrll-auth-token")){
        isLoginIn = true
    }


    return(
        <>
            <Header />
            <div>
                {
                    isLoginIn? <Outlet /> :<Navigate to={"/login"} />
                }
            </div>
            <Footer />
        </>
    )
}

export default ProtectedRoute;