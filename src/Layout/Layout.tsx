import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Router from "../Router/Router";
import MainBottom from "../Components/MainBottom/MainBottom";

const Layout = () => {
  
  return (
    <>
      <Header />
      <Router />
      <MainBottom />
      <Footer />
    </>
  );
};

export default Layout;
