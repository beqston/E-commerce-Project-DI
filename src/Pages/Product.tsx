import { useParams } from "react-router-dom";

const Product = ()=> {
    const {productID} = useParams()
    console.log(productID)

    return(
        <div>
            {/* <h2>Products</h2> */}
        </div>
    )
}

export default Product;