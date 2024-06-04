import ProductSection from "../Components/ProductsSection/ProductSection";
import classname from "../assets/style/home.module.scss"

const Home = ()=>  {
    return(
        <main className={classname.clas}>
            home
            <ProductSection />
        </main>
    )
}

export default Home;